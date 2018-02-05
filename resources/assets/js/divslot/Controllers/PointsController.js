import CookieController from "./CookieController";

let userWinTransferDelta;

export default class PointsController {
    constructor(props, options) {
        this._userCash; // In coins
        this._userInsurance; // In coins
        this._userWin; // In points
        this._previousWin; // In points

        this._linesAmount;
        this._betPerLine;

        this._denomination;

        this.props = props;

        this._init(options);
    }

    _init({lines=settings.lines[0], betPerLine=settings.betPerLine[0], denomination=settings.denominations[0], userInsurance=0, userCash=0, userWin=0}) {
        // Init denom
        this._denomination = denomination;

        this.props.onSetDenomination(this._denomination);

        this.setLines(lines);
        this.setBetPerLine(betPerLine);

        // Init user cash
        this._userCash = this.kupsToCoins(userCash);
        this.updateUserCash();

        // Init user insurance
        this._userInsurance = this.kupsToCoins(userInsurance);
        this.updateUserInsurance();

        this.userWin = userWin;
    }

    coinsToPoints(coins) {
        return Math.floor(coins / (this._denomination * 100));
    }
    kupsToPoints(kups) {
        return Math.floor(kups / this._denomination);
    }
    kupsToCoins(kups) {
        return +(kups * 100).toFixed(0);
    }
    coinsToKups(coins) {
        return coins / 100;
    }
    pointsToCoins(points) {
        return points * this._denomination * 100;
    }
    pointsToKups(points) {
        return points * this._denomination;
    }

    get denomination() { return this._denomination };
    setDenomination = denomination => {
        this._denomination = denomination;

        this.props.onSetDenomination(this.denomination);
        // Remember new denomination in cookies
        CookieController.set('denomination', this._denomination);

        this.updateUserCash();
        this.updateUserInsurance();
        this._updateTotalBet();
    }

    get lines() { return this._linesAmount };
    setLines = linesAmount => {
        this._linesAmount = linesAmount;

        this.props.onSetLine(this.lines, this.betPerLine);
        // Remember new linesAmount in cookies
        CookieController.set('lines_amount', this._linesAmount);

        this._updateTotalBet();
    }

    get betPerLine() { return this._betPerLine };
    setBetPerLine = betPerLine => {
        this._betPerLine = betPerLine;

        this.props.onSetBetPerLine(this.lines, this.betPerLine);
        // Remember new linesAmount in cookies
        CookieController.set('bet_per_line', this._betPerLine);

        this._updateTotalBet();
    }

    get totalBet() { return this._linesAmount * this._betPerLine };

    _updateTotalBet() {
        this.props.panel.setTotalBet({
            points: this.totalBet,
            kups: this.pointsToKups(this.totalBet)
        });
    }

    /**
     * Set user cash
     * @param {String|Number} cash New cash to set in coins
     */
    set userCash(cash) {
        this._userCash = cash;
        this.updateUserCash();
    }
    get userCash() { return this._userCash; }
    get userCashInPoints() { return this.coinsToPoints(this._userCash); }

    updateUserCash() {
        this.props.panel.setUserCash({
            points: this.coinsToPoints(this._userCash),
            kups: this.coinsToKups(this._userCash)
        });
    }

    updateUserInsurance() {
        this.props.panel.setUserInsurance({
            points: this.coinsToPoints(this._userInsurance),
            kups: this.coinsToKups(this._userInsurance)
        });
    }

    /**
     * Set user win in points
     * @param {String|Number} win New win to set in points
     */
    set userWin(win) {
        this._userWin = +win;
        this.props.panel.setUserWin({
            points: this._userWin,
            kups: this.pointsToKups(this._userWin)
        });
    }
    get userWin() { return this._userWin; }

    /**
     * Set user previous win in points
     * @param {String|Number} previousWin New previous win to set in points
     */
    set previousWin(previousWin) {
        this._previousWin = +previousWin;
        this.props.panel.setUserPreviousWin({
            points: this._previousWin,
            kups: this.pointsToKups(this._previousWin)
        });
    }
    get previousWin() { return this._previousWin; }

    // Transfer win cash to user's cash
    transferWinToCash() {
        return new Promise(resolve => {
            // Transfer duration in ms
            const transferDuration = 2000;
            // Delay between each iteration in ms
            const delayBetweenIteration = 50;

            // Amount of iterations
            const iterationsAmount = transferDuration / delayBetweenIteration;

            // Delta of user cash between iterations
            userWinTransferDelta = Math.ceil(this.userWin / iterationsAmount);

            const intervalId = setInterval(() => {
                // If last transfer iteration
                if (this.userWin - userWinTransferDelta <= 0) {
                    // Transfer rest userWin pooint to userCash
                    this.userCash += this.pointsToCoins(this.userWin);

                    // Reset user win
                    this.userWin = 0;

                    clearInterval(intervalId);

                    // Resolve promise when transfering is done
                    resolve();
                } else {
                    // Change values on delta
                    this.userCash += this.pointsToCoins(userWinTransferDelta);
                    this.userWin -= userWinTransferDelta;
                }
            }, delayBetweenIteration);
        });
    }

    speedUpTransfer() {
        userWinTransferDelta *= 2;
    }
}
