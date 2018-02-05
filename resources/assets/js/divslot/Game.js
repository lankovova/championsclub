import {
        getNextArrayItem,
        getMultiplyNearestLowerNumbers,
        shuffleArray
    } from './Helpers/arrayHelper';
import PointsController from './Controllers/PointsController';
import ReelsController from './Controllers/ReelsController';
import LinesController from './Controllers/LinesController';
import InterfaceController from './Controllers/InterfacePicker';
import APIController from './Controllers/APIController';
import Translator from './Translator';
import CookieController from './Controllers/CookieController';

const BONUS_SPINS_TYPES = {
    freeSpin: 'free_spin',
    substitution: 'substitution',
}

export default class Game {
    constructor(gameName) {
        this.gameName = gameName;
        this.gameNode = document.querySelector('#game');

        // Store for spin response data
        this.spinResponse = {};

        // Store for bonus spins
        this.bonusSpins = {
            type: '',
            on: false,
            spins: [],
            standartSpinsAmount: 0,
            currentSpinIndex: 0,
            amount: 0,
        };

        // Flag for check if auto spins in turned on
        this.autoSpinIsOn = false;

        this.reelsController = new ReelsController(
            document.querySelector('#reels_wrapper'),
            {reelsHasStopped: this.reelsHasStopped}
        );

        this.linesController = new LinesController(
            document.querySelector('#reels_container'),
            {reels: this.reelsController.reels}
        );

        this.interfaceController = new InterfaceController({
            containerNode: document.querySelector('#reels_wrapper'),
            lines: this.linesController.lines,
            spinReels: this.spin,
            stopReels: this.stop,
            takeWin: this.takeWinClickHandler,
            speedUpTakeWin: this.speedUpTakeWin,
            startAutoSpin: this.startAutoSpin,
            stopAutoSpin: this.stopAutoSpin,
            setDenomination: this.setDenomination,
            setLines: this.setLines,
            setBetPerLine: this.setBetPerLine,
            setMaxBet: this.setMaxBet,
            startGamble: this.startGamble,
            gambleWin: this.gambleWin,
            gambleLose: this.gambleLose,
            setSpinPossibility: this.setSpinPossibility
        });

        (async () => {
            this.interfaceController.panel.notifier.text = '...';

            // Load some necessarily information, use it
            const playerData = await APIController.getPlayerData();
            const userCash = +playerData.cash;
            const userInsurance = +playerData.insurance;

            // FIXME:
            settings.denomination = playerData.denomination ? playerData.denomination : settings.denomination;
            settings.betPerLine = playerData.bet_per_line ? playerData.bet_per_line : settings.betPerLine;

            // Get game values
            const linesFromCookies = +CookieController.get('lines_amount');
            const betPerLineFromCookies = +CookieController.get('bet_per_line');
            const denominationFromCookies = +CookieController.get('denomination');

            const linesAmountToSet = (linesFromCookies && settings.lines.includes(linesFromCookies))
                                        ? linesFromCookies
                                        : settings.lines[Math.floor((settings.lines.length - 1) / 2)];

            const betPerLineToSet = (betPerLineFromCookies && settings.betPerLine.includes(betPerLineFromCookies))
                                        ? betPerLineFromCookies
                                        : settings.betPerLine[0];

            const denominationToSet = (denominationFromCookies && settings.denomination.includes(denominationFromCookies))
                                        ? denominationFromCookies
                                        : settings.denomination[0];

            this.pointsController = new PointsController({
                panel: this.interfaceController.panel,
                onSetLine: this.interfaceController.onSetLine,
                onSetBetPerLine: this.interfaceController.onSetBetPerLine,
                onSetDenomination: this.interfaceController.onSetDenomination,
            }, {
                userCash: userCash,
                userInsurance: userInsurance,
                lines: linesAmountToSet,
                betPerLine: betPerLineToSet,
                denomination: denominationToSet
            });

            // FIXME: Rethink abount set idle here
            this.interfaceController.setIdle();
            this.setSpinPossibility();

            // Remove preloader
            window.onGameLoaded ? window.onGameLoaded() : console.warn('No onGameLoaded function in window object');
        })();
    }

    setMaxBet = () => {
        // Get lines and betPerLine values for max possible bet depending on user's cash
        const maxBetVars = getMultiplyNearestLowerNumbers(this.pointsController.userCashInPoints, settings.lines, settings.betPerLine);

        this.setLines(maxBetVars.firstNumber);
        this.setBetPerLine(maxBetVars.secondNumber);
    }

    setBetPerLine = newBetPerLine => this.setBetRelatedValue(settings.betPerLine, this.pointsController.betPerLine, this.pointsController.setBetPerLine)(newBetPerLine);
    setDenomination = newDenom => this.setBetRelatedValue(settings.denominations, this.pointsController.denomination, this.pointsController.setDenomination)(newDenom);

    setBetRelatedValue = (array, currentValue, setNewValue) => {
        return value => {
            const newValue = value ? +value : getNextArrayItem(array, currentValue);
            setNewValue.call(null, newValue);
            this.setSpinPossibility();
        }
    }

    setLines = newLines => {
        const newValue = newLines ? +newLines : getNextArrayItem(settings.lines, this.pointsController.lines);
        this.pointsController.setLines(newValue);

        this.setSpinPossibility();

        this.linesController.showAndHideLines(newValue);
    }

    // Disables/enables spin possibility depending on user's bet/cash
    setSpinPossibility = () => {
        if (this.pointsController.totalBet > this.pointsController.userCashInPoints) {
            this.interfaceController.panel.notifier.text = Translator.notEnoughCash;
            this.interfaceController.disableSpinAndAuto();
        } else {
            this.interfaceController.panel.notifier.text = Translator.gameOver;
            this.interfaceController.setIdle();
        }
    }

    takeWinClickHandler = async () => {
        this.interfaceController.disableInterface();

        if (this.interfaceController.alertWindow.isOn) {
            this.interfaceController.hideAlert();
        }

        // Disable gamble buttons while transfering win
        if (this.interfaceController.gambleModal.isOn) {
            this.interfaceController.gambleModal.disableBtns();
        }

        // Wait transfering win
        await this.transferWin();

        if (this.interfaceController.gambleModal.isOn) {
            this.interfaceController.gambleOver();
        }

        // FIXME: Rethink abount set idle here
        // After transfering win enable interface
        this.interfaceController.setIdle();
        this.setSpinPossibility();
    }

    transferWin = async () => {
        // Enable transfer win speed up
        this.interfaceController.enableSpeedUpTransferWin();

        // Remember previous win before transfering it to user's cash
        const previousWin = this.pointsController.userWin;

        // Wait until all win points will be transfered to user's cash
        await this.pointsController.transferWinToCash();

        // Disable transfer speed up if money already transfered
        this.interfaceController.disableSpeedUpTransferWin();

        // Unblur symbols after win points are transfered
        this.linesController.unblurAllSymbols();

        // Set previous win in win block
        this.pointsController.previousWin = previousWin;

        return new Promise(resolve => resolve());
    }

    // Increase transfering speed
    speedUpTakeWin = () => {
        this.pointsController.speedUpTransfer();
        this.interfaceController.disableSpeedUpTransferWin();
    }

    startGamble = () => {
        this.linesController.unblurAllSymbols();

        // Hide alert in case
        // when user won something in bonus spins
        // and want to gamble
        if (this.interfaceController.alertWindow.isOn) {
            this.interfaceController.hideAlert();
        }

        // Set interface to gamble 'state'
        this.interfaceController.setGamble(this.pointsController.userWin);
    }
    gambleWin = async (wonCoins) => {
        this.interfaceController.panel.notifier.text = Translator.win;

        // Update win field
        this.pointsController.userWin = this.pointsController.coinsToPoints(wonCoins);

        // Update gamble fields values
        this.interfaceController.gambleModal.setValues(this.pointsController.userWin);
    }
    gambleLose = () => {
        this.interfaceController.panel.notifier.clear();
        // Clear win field
        this.pointsController.userWin = 0;
    }

    spin = async () => {
        if (this.bonusSpins.on) {
            console.log('Bonus spins starts');

            // If it is substitution bonus spins type
            if (this.bonusSpins.type === BONUS_SPINS_TYPES.substitution) {
                // If it is substitution pre start
                if (this.bonusSpins.currentSpinIndex === 0) {
                    // Disable whole interface
                    this.interfaceController.disableInterface();

                    // Wait for animation to end
                    await this.interfaceController.animateRandomizingSubstitutionSymbol(this.spinResponse.bonus_spins.substitution_symbol);

                    // Start bonus spin
                    this.bonusSpin();
                }
            } else {
                // Hide alert when bonus spins starts
                this.interfaceController.hideAlert();

                // Disable whole interface
                this.interfaceController.disableInterface();

                // Reset user win when bonus spins starts
                this.pointsController.userWin = 0;

                // Start bonus spin
                this.bonusSpin();
            }
        } else {
            console.log('Normal spin');

            // Hide alert after bonus spins
            if (this.interfaceController.alertWindow.isOn) {
                this.interfaceController.hideAlert();
            }

            this.getDataAndSpin();
        }
    }

    getDataAndSpin = () => {
        // Disable whole interface
        this.interfaceController.disableInterface();

        // Enable auto btn if auto spins is on
        if (this.autoSpinIsOn) this.interfaceController.enableAuto();

        this.interfaceController.panel.notifier.clear();

        APIController.getSpinData({
            linesAmount:  this.pointsController.lines,
            betPerLine:   this.pointsController.betPerLine,
            denomination: this.pointsController.denomination * 100,
            gameName:     this.gameName
        }).then(result => {
            this.spinResponse = result;

            // If bonus spins dropped
            if (this.spinResponse.bonus_spins) {
                // Init bonus spins vars
                this.bonusSpins.on = true;
                this.bonusSpins.spins = this.spinResponse.bonus_spins.spins;
                this.bonusSpins.currentSpinIndex = 0;
                this.bonusSpins.standartSpinsAmount = +this.spinResponse.bonus_spins.amount;
                this.bonusSpins.amount = +this.bonusSpins.standartSpinsAmount;
                this.bonusSpins.type = this.spinResponse.bonus_spins.type;
            }

            // Decrease user cash
            this.pointsController.userCash -= this.pointsController.pointsToCoins(this.pointsController.totalBet);

            // Clear notifier
            this.interfaceController.panel.notifier.clear();

            // Stop showing win lines
            this.linesController.stopCyclingWinningLines();

            // Spin reels to given final symbols
            this.startReels(this.spinResponse.final_symbols);
        });
    }

    startAutoSpin = () => {
        // Enable auto spin
        this.autoSpinIsOn = true;

        // Start normal spin
        this.getDataAndSpin();
    }

    stopAutoSpin = () => {
        this.autoSpinIsOn = false;

        // Disable interface when user turns of auto spins
        // until next action(take, spin, etc...)
        this.interfaceController.disableInterface();
    }

    bonusSpin = () => {
        this.bonusSpins.currentSpinIndex++;

        // FIXME:
        this.linesController.unblurAllSymbols();

        this.interfaceController.panel.notifier.text = `${Translator.bonusSpin} ${this.bonusSpins.currentSpinIndex} ${Translator.of} ${this.bonusSpins.amount}`;

        // Spin reels to given final symbols
        this.startReels(this.bonusSpins.spins[this.bonusSpins.currentSpinIndex - 1].final_symbols);
    }

    /**
     * Start reels
     * @param {Array<Number>} finalSymbols Two dimensional array of final symbol
     */
    startReels(finalSymbols) {
        // Hide all lines
        this.linesController.hideAllLines();

        this.reelsController.startReels(finalSymbols);

        // Enable stop
        this.interfaceController.enableStop();
    }

    stop = () => {
        this.interfaceController.disableStop();

        this.reelsController.stopReels();
    }

    /**
     * Show winning lines of passed spin result and add win
     * @param {[]} spinResult Spin result of lines
     */
    async showWinningLines(spinResult) {
        await this.linesController.showWinningLines(spinResult, winCashInLine => {
            this.pointsController.userWin += winCashInLine;
            this.interfaceController.panel.notifier.text = `${Translator.youWon} ${this.pointsController.userWin} ${Translator.credits}`;
        });

        return new Promise(resolve => resolve());
    }

    // All reels has stopped event
    reelsHasStopped = async () => {
        this.interfaceController.disableStop();

        // Checking is there bonus spins
        if (this.bonusSpins.on) {
            // If bonus spins just dropped
            if (this.bonusSpins.currentSpinIndex === 0) {
                this.bonusSpins.on = true;

                // Show win lines and transfer win from regular spin
                await this.showWinningLines(this.spinResponse.spin_result);

                // Remove svg lines nodes when bonus spins just dropped
                this.linesController.removeWinningLines();
                // And stop symbols animations before bonus spins alert showed up
                this.linesController.stopSymbolsAnim();

                // Show alert and wait for user to press start btn
                // Based on bonus spins type
                if (this.bonusSpins.type === BONUS_SPINS_TYPES.substitution) {
                    // Show substitution alert
                    this.interfaceController.showAlert(`${Translator.youWon} ${this.bonusSpins.standartSpinsAmount} ${Translator.bonusSpins} ${Translator.withSubstitution}`);
                    this.interfaceController.panel.notifier.text = `${Translator.youWon} ${this.bonusSpins.standartSpinsAmount} ${Translator.bonusSpins} ${Translator.withSubstitution}`;

                    this.interfaceController.displaySubstitutionStart();

                    // Wait for user to start spin
                    this.interfaceController.enableSpin();
                } else {
                    this.interfaceController.showAlert(`${Translator.youWon} ${this.bonusSpins.standartSpinsAmount} ${Translator.bonusSpins}`);
                    this.interfaceController.panel.notifier.text = `${Translator.youWon} ${this.bonusSpins.standartSpinsAmount} ${Translator.bonusSpins}`;

                    // Transfer user regular spin win
                    await this.transferWin();

                    // Enable spin btn to start bonus spins
                    this.interfaceController.enableSpin();
                }

                return;
            }

            const previousBonusSpin = this.bonusSpins.spins[this.bonusSpins.currentSpinIndex - 1];

            // If user won on bonus spin
            if (previousBonusSpin.won) {
                // Show win lines and transfer win from regular spin
                await this.showWinningLines(previousBonusSpin.spin_result);

                // Unblur all symbols
                this.linesController.unblurAllSymbols();
                this.linesController.removeWinningLines();
            }

            // If bonus spins are not substitution
            if (this.bonusSpins.type !== BONUS_SPINS_TYPES.substitution) {
                // If dropped more bonus spins then increase counter
                // Also show alert and notify user about more bonus spins
                if (this.reelsController.isThereBonusSpins()) {
                    await (() => {
                        return new Promise(resolve => {
                            this.interfaceController.showAlert(`${Translator.youWon} ${this.bonusSpins.standartSpinsAmount} ${Translator.more} ${Translator.bonusSpins}`);
                            this.interfaceController.panel.notifier.text = `${Translator.youWon} ${this.bonusSpins.standartSpinsAmount} ${Translator.more} ${Translator.bonusSpins}`;

                            setTimeout(() => {
                                this.interfaceController.hideAlert();
                                resolve();
                            }, 1500);
                        });
                    })();

                    // Increase
                    this.bonusSpins.amount += this.bonusSpins.standartSpinsAmount;
                }
            }

            // If bonus spins type is substitution
            if (this.bonusSpins.type === BONUS_SPINS_TYPES.substitution) {
                // If there is substitution
                if (this.reelsController.isThereSubstitution(previousBonusSpin.substitution.final_symbols, this.spinResponse.bonus_spins.substitution_symbol)) {
                    // Stop symbols animation while substituting other symbols
                    this.linesController.stopSymbolsAnim();

                    // Replace symbols in reel
                    await this.reelsController.makeSubstitution(previousBonusSpin.substitution.final_symbols, this.spinResponse.bonus_spins.substitution_symbol);
                }

                // Count win
                if (previousBonusSpin.substitution.won) {
                    await this.showWinningLines(previousBonusSpin.substitution.spin_result);

                    // Unblur all symbols
                    this.linesController.unblurAllSymbols();
                    this.linesController.removeWinningLines();
                }
            }

            // If no more bonus spins
            if (this.bonusSpins.currentSpinIndex === this.bonusSpins.amount) {
                this.interfaceController.panel.notifier.text = `${Translator.bonusSpins} ${Translator.ended}. ${Translator.youWon} ${this.pointsController.userWin} ${Translator.credits}`;

                // Show alert
                this.interfaceController.showAlert(`${Translator.bonusSpins} ${Translator.ended}, ${Translator.youWon} ${this.pointsController.userWin} ${Translator.credits} ${Translator.in} ${this.bonusSpins.amount} ${Translator.spins}`);

                // Tun off bonus spins
                this.bonusSpins.on = false;

                if (this.bonusSpins.type === BONUS_SPINS_TYPES.substitution) {
                    // Hide and reset substitution block
                    this.interfaceController.hideAndResetSubstitutionBlock();
                }

                // Check if user won
                if (this.pointsController.userWin > 0) {
                    // If user won something
                    this.interfaceController.setTakeWin();
                } else {
                    // If no win at all
                    // FIXME: Rethink abount set idle here
                    this.interfaceController.setIdle();
                    this.setSpinPossibility();
                }

                return;
            }

            // Spin bonus spin
            this.bonusSpin();

            return;
        }

        // Spin ended
        if (this.spinResponse.won) { // User won case
            // Show all winning lines
            // and update user win line by line in callback
            await this.showWinningLines(this.spinResponse.spin_result);

            if (this.autoSpinIsOn) { // If auto spin is on
                // Transfer user win
                await this.transferWin();

                this.linesController.unblurAllSymbols();

                // If auto spins was disabled while transfering money
                if (!this.autoSpinIsOn) {
                    // FIXME: Rethink abount set idle here
                    this.interfaceController.setIdle();
                    this.setSpinPossibility();
                } else {
                    this.getDataAndSpin();
                }
            } else { // Normal spin case
                // Enable possibility to take win or gamble
                this.interfaceController.setTakeWin();
                this.interfaceController.panel.notifier.text = Translator.gambleUpOrTakeWin;

                // Cycle lines showing while user decides to take win or gamble
                this.linesController.cycleShowingWinningLines();
            }
        } else { // User lose case
            // Reset userWin block
            this.pointsController.userWin = 0;

            if (this.autoSpinIsOn) { // If auto spin is on
                this.getDataAndSpin();
            } else { // Normal spin case
                // FIXME: Rethink abount set idle here
                this.interfaceController.setIdle();
                this.setSpinPossibility();
            }
        }

    }

}
