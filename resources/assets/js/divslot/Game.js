import {getNextArrayItem, getMultiplyNearestLowerNumbers, shuffleArray} from './Helpers/arrayHelp';
import PointsController from './Controllers/PointsController';
import ReelsController from './Controllers/ReelsController';
import LinesController from './Controllers/LinesController';
import InterfaceController from './Controllers/InterfaceController';
import APIController from './Controllers/APIController';

const bonusSpinsTypes = {
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
            { reelsHasStopped: this.reelsHasStopped }
        );

        this.linesController = new LinesController(
            document.querySelector('#reels_container'),
            { reels: this.reelsController.reels }
        );

        this.interfaceController = new InterfaceController({
            containerNode: document.querySelector('#reels_wrapper'),
            lines: this.linesController.lines,
            spinReels: this.spin,
            stopReels: this.stop,
            takeWin: this.takeWinClickHandler,
            speedUpTakeWin: this.speedUpTakeWin,
            autoSpin: this.autoSpin,
            stopAutoSpinning: this.stopAutoSpinning,
            setDenomination: this.setDenomination,
            setLines: this.setLines,
            setBetPerLine: this.setBetPerLine,
            setMaxBet: this.setMaxBet,
            startGamble: this.startGamble,
            gambleWin: this.gambleWin,
            gambleLose: this.gambleLose,
            setSpinPossibility: this.setSpinPossibility
        });

        this.interfaceController.panel.notifier.text = 'Loading...';
        (async () => {
            // Load some necessarily information, use it
            const playerData = await APIController.getPlayerData();
            const userCash = +playerData.cash;

            // TODO: Move to denom, betPerLine and lines to config.js
            settings.denomination = playerData.denomination ? playerData.denomination : settings.denomination;
            settings.betPerLine = playerData.bet_per_line ? playerData.bet_per_line : settings.betPerLine;

            this.pointsController = new PointsController({
                panel: this.interfaceController.panel,
                linePresenters: this.interfaceController.linePresenters,
                linesBlock: this.interfaceController.linesBlock,
                betPerLineBlock: this.interfaceController.betPerLineBlock,
                denominationBlock: this.interfaceController.denominationBlock,
            }, {
                userCash: userCash,
                lines: 1,
                // TODO: Get this values from cookie
                betPerLine: settings.betPerLine[0],
                denomination: settings.denomination[0],
            });

            this.interfaceController.setIdle();
            this.setSpinPossibility();

            // Remove preloader
            if (window.onGameLoaded) {
                window.onGameLoaded();
            } else {
                console.warn('No onGameLoaded function');
            }
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
            this.interfaceController.panel.notifier.text = 'Not enough cash for this bet';
            this.interfaceController.disableSpinAndAuto();
        } else {
            this.interfaceController.panel.notifier.text = 'Game over, place your bet';
            this.interfaceController.setIdle();
        }
    }

    takeWinClickHandler = async () => {
        this.interfaceController.disableInterface();

        // FIXME:
        if (this.interfaceController.alertWindow.isOn) {
            this.interfaceController.hideAlert();
        }

        if (this.interfaceController.gambleModal.isOn) {
            this.interfaceController.gambleModal.disableBtns();
        }

        // Wait transfering win
        await this.transferWin();

        // FIXME:
        if (this.interfaceController.gambleModal.isOn) {
            this.interfaceController.gambleOver();
        }

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

        // FIXME:
        if (this.interfaceController.alertWindow.isOn) {
            this.interfaceController.hideAlert();
        }

        // Set interface to gamble 'state'
        this.interfaceController.setGamble(this.pointsController.userWin);
    }
    gambleWin = async (wonCoins) => {
        this.interfaceController.panel.notifier.text = 'Win';

        // Update win field
        this.pointsController.userWin = this.pointsController.coinsToPoints(wonCoins);
    }
    gambleLose = () => {
        // Clear win field
        this.pointsController.userWin = 0;
    }

    spin = async () => {
        if (this.bonusSpins.on) {
            console.log('Bonus spins starts');

            // If it is substitution bonus spins type
            if (this.bonusSpins.type === bonusSpinsTypes.substitution) {
                // And if substitution just starts
                if (this.bonusSpins.currentSpinIndex === 0) {
                    // Disable whole interface
                    this.interfaceController.disableInterface();

                    // Wait for animation to end
                    await this.interfaceController.animateRandomizingSubstitutionSymbol(this.spinResponse.bonus_spins.substitution_symbol);
                }
            } else {
                // Hide alert when bonus spins starts
                this.interfaceController.hideAlert();

                // Disable whole interface
                this.interfaceController.disableInterface();

                // Reset user win when bonus spins starts
                this.pointsController.userWin = 0;

                if (this.interfaceController.alertWindow.isOn) {
                    this.interfaceController.hideAlert();
                }
            }

            // Start bonus spin
            this.bonusSpin();
        } else {
            console.log('Normal spin');

            if (this.interfaceController.alertWindow.isOn) {
                this.interfaceController.hideAlert();
            }

            this.getDataAndSpin();
        }
    }

    getDataAndSpin = () => {
        // Disable whole interface
        this.interfaceController.disableInterface();

        this.interfaceController.panel.notifier.text = 'Fetching data...';

        // Enable auto btn if auto spins is on
        if (this.autoSpinIsOn) this.interfaceController.enableAuto();

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

    autoSpin = () => {
        // If no auto spin, turn it on
        if (!this.autoSpinIsOn) this.autoSpinIsOn = true;

        // Start normal spin
        this.getDataAndSpin();
    }

    stopAutoSpinning = () => {
        this.autoSpinIsOn = false;
    }

    bonusSpin = () => {
        this.bonusSpins.currentSpinIndex++;

        // FIXME:
        this.linesController.unblurAllSymbols();

        this.interfaceController.panel.notifier.text = `Bonus spin ${this.bonusSpins.currentSpinIndex} of ${this.bonusSpins.amount}`;

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
            this.interfaceController.panel.notifier.text = `You won ${this.pointsController.userWin} points`;
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

                // Show alert and wait for user to press start btn
                // Based on bonus spins type
                if (this.bonusSpins.type === bonusSpinsTypes.substitution) {
                    // Show substitution alert
                    this.interfaceController.showAlert(`You won ${this.bonusSpins.standartSpinsAmount} bonus spins with substitution`);
                    this.interfaceController.panel.notifier.text = `You won ${this.bonusSpins.standartSpinsAmount} bonus spins with substitution`;

                    this.interfaceController.displaySubstitutionStart();

                    // Wait for user to start spin
                    this.interfaceController.enableSpin();
                } else {
                    this.interfaceController.showAlert(`You won ${this.bonusSpins.standartSpinsAmount} bonus spins`);
                    this.interfaceController.panel.notifier.text = `You won ${this.bonusSpins.standartSpinsAmount} bonus spins`;

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
            }

            // If dropped more bonus spins then increase counter
            // Also show alert and notify user about more bonus spins
            if (this.reelsController.isThereBonusSpins()) {
                await (() => {
                    return new Promise(resolve => {
                        this.interfaceController.showAlert(`You won ${this.bonusSpins.standartSpinsAmount} more bonus spins`);
                        this.interfaceController.panel.notifier.text = `You won ${this.bonusSpins.standartSpinsAmount} more bonus spins`;

                        setTimeout(() => {
                            this.interfaceController.hideAlert();
                            resolve();
                        }, 1500);
                    });
                })();

                // Increase
                this.bonusSpins.amount += this.bonusSpins.standartSpinsAmount;
            }

            // If bonus spins type is substitution
            if (this.bonusSpins.type === bonusSpinsTypes.substitution) {
                // Replace symbols in reel
                await this.reelsController.makeSubstitution(previousBonusSpin.substitution.final_symbols, this.spinResponse.bonus_spins.substitution_symbol);

                // Count win
                if (previousBonusSpin.substitution.won) {
                    await this.showWinningLines(previousBonusSpin.substitution.result);
                }
            }

            // If no more bonus spins
            if (this.bonusSpins.currentSpinIndex === this.bonusSpins.amount) {
                // Hide and reset substitution block
                this.interfaceController.hideAndResetSubstitutionBlock();

                this.interfaceController.panel.notifier.text = `Free spins ended. You won ${this.pointsController.userWin} points`;

                // Show alert
                this.interfaceController.showAlert(`Free spins ended, you won ${this.pointsController.userWin} points in ${this.bonusSpins.amount} spins`);

                // Tun off bonus spins
                this.bonusSpins.on = false;

                if (this.bonusSpins.type === bonusSpinsTypes.substitution) {
                    // TODO: Reset substitution symbol here
                }

                // Check if user won
                if (this.pointsController.userWin > 0) {
                    // If user won something
                    this.interfaceController.setTakeWin();
                } else {
                    // If no win at all
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
        if (this.spinResponse.won) { // Win case
            // Show all winning lines
            // and update user win line by line in callback
            await this.showWinningLines(this.spinResponse.spin_result);

            if (this.autoSpinIsOn) {
                // Transfer user regular spin win
                await this.transferWin();

                // If auto spins was disabled while transfering money
                if (!this.autoSpinIsOn) {
                    this.interfaceController.setIdle();
                    this.setSpinPossibility();
                } else {
                    this.autoSpin();
                }

                return;
            }

            // Enable possibility to take win or gamble
            this.interfaceController.setTakeWin();
            this.interfaceController.panel.notifier.text = 'Take win or gamble';

            this.linesController.cycleShowingWinningLines();
        } else { // Lose case
            // Reset userWin block after
            this.pointsController.userWin = 0;

            // If auto spin enabled
            if (this.autoSpinIsOn) {
                this.autoSpin();

                return;
            }

            this.interfaceController.setIdle();
            this.setSpinPossibility();
        }

    }

}
