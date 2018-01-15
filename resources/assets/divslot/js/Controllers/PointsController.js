class PointsController {
    constructor(props, options) {
        this._userCash; // In coins
        this._userWin; // In points

        this._linesAmount;
        this._betPerLine;

        this._denomination;

        this.props = props;

        this._init(options);
    }

    _init({lines = settings.lines[0], betPerLine = settings.betPerLine[0], denomination = settings.denominations[0], userCash = 0, userWin = 0}) {
        // Init denom
        this._denomination = denomination;
        this.props.panel.setDenomination(this._denomination);

        this.setLines(lines);
        this.setBetPerLine(betPerLine);

        // Init user cash
        this._userCash = this.kupsToCoins(userCash);
        this.props.panel.setUserCash({
            points: this.coinsToPoints(this._userCash),
            kups: this.coinsToKups(this._userCash)
        });

        this.userWin = userWin;
    }

    coinsToPoints(coins) {
        return Math.floor(coins / this._denomination);
    }
    kupsToPoints(kups) {
        return Math.floor(kups * 100 / this._denomination);
    }
    kupsToCoins(kups) {
        return kups * 100;
    }
    coinsToKups(coins) {
        return coins / 100;
    }
    pointsToCoins(points) {
        return points * this._denomination;
    }
    pointsToKups(points) {
        return points * this._denomination / 100;
    }

    get denomination() { return this._denomination };
    setDenomination = denomination => {
        this._denomination = denomination;

        // Update panel value
        this.props.panel.setDenomination(this._denomination);

        this.updateUserCash();
        this._updateTotalBet();
    }

    get lines() { return this._linesAmount };
    setLines = linesAmount => {
        this._linesAmount = linesAmount;

        // Update panel value
        this.props.panel.setLinesAmount(this._linesAmount);

        // Update line presenters text
        this.props.linePresenters.setText(this._linesAmount, this._betPerLine);

        this._updateTotalBet();
    }

    get betPerLine() { return this._betPerLine };
    setBetPerLine = betPerLine => {
        this._betPerLine = betPerLine;

        // Update panel value
        this.props.panel.setBetPerLine(this._betPerLine);

        // Update line presenters text
        this.props.linePresenters.setText(this._linesAmount, this._betPerLine);

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
        this.props.panel.setUserCash({
            points: this.coinsToPoints(this._userCash),
            kups: this.coinsToKups(this._userCash)
        });
    }
    get userCash() { return this._userCash; }
    get userCashInPoints() { return this.coinsToPoints(this._userCash); }

    updateUserCash() {
        this.props.panel.setUserCash({
            points: this.coinsToPoints(this._userCash),
            kups: this.coinsToKups(this._userCash)
        });
    }

    /**
     * Set user win
     * @param {String|Number} win New win to set
     */
    set userWin(win) {
        this._userWin = win;
        this.props.panel.setUserWin({
            points: this._userWin,
            kups: this.pointsToKups(this._userWin)
        });
    }
    get userWin() { return this._userWin; }
}

export default PointsController;
