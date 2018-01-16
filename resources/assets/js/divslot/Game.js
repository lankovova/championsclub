import {getNextArrayItem, getMultiplyNearestLowerNumbers} from './Helpers/arrayHelp';
import PointsController from './Controllers/PointsController';
import ReelsController from './Controllers/ReelsController';
import LinesController from './Controllers/LinesController';
import InterfaceController from './Controllers/InterfaceController';

import {freeSpin as mockResponseFreeSpin} from './spinMockup';

import axios from 'axios';

let userWinTransferDelta;

export default class Game {
    constructor(gameName) {
        this.gameName = gameName;

        this.gameNode = document.querySelector('#game');
        // Store for spin response data
        this.spinResponse = {};

        // Store for bonus spins
        this.bonusSpins = {
            on: false,
            spins: [],
            currentSpinIndex: 0,
            totalSpins: 0
        };

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
            takeWin: this.takeWin,
            speedUpTakeWin: this.speedUpTakeWin,
            setDenomination: this.setDenomination,
            setLines: this.setLines,
            setBerPerLine: this.setBerPerLine,
            setMaxBet: this.setMaxBet
        });

        this.interfaceController.panel.notifier.text = 'Loading...';
        (async () => {
            // Load some necessarily information, use it
            const playerData = await this.getPlayerData();
            const userCash = +playerData.cash;

            this.pointsController = new PointsController({
                panel: this.interfaceController.panel,
                linePresenters: this.interfaceController.linePresenters,
                linesBlock: this.interfaceController.linesBlock,
                betPerLineBlock: this.interfaceController.betPerLineBlock,
                denominationBlock: this.interfaceController.denominationBlock,
            }, {
                userCash: userCash,
                denomination: 0.01,
                lines: 1,
                betPerLine: 1,
            });

            // And enable game to play
            this.interfaceController.setIdle();
            this.interfaceController.panel.notifier.text = 'Press start to spin';

            // Remove preloader
            window.onGameLoaded();
        })();
    }

    setMaxBet = () => {
        // Get lines and betPerLine values for max possible bet depending on user's cash
        const maxBetVars = getMultiplyNearestLowerNumbers(this.pointsController.userCashInPoints, settings.lines, settings.betPerLine);

        this.setLines(maxBetVars.firstNumber);
        this.setBerPerLine(maxBetVars.secondNumber);
    }

    setBerPerLine = newBetPerLine => this.setBetRelatedValue(settings.betPerLine, this.pointsController.betPerLine, this.pointsController.setBetPerLine)(newBetPerLine);
    setDenomination = newDenom => this.setBetRelatedValue(settings.denominations, this.pointsController.denomination, this.pointsController.setDenomination)(newDenom);

    setBetRelatedValue = (array, currentValue, setNewValue) => {
        return value => {
            const newValue = value ? value : getNextArrayItem(array, currentValue);
            setNewValue.call(null, newValue);
            this.setSpinPossibility();
        }
    }

    setLines = newLines => {
        const newValue = newLines ? newLines : getNextArrayItem(settings.lines, this.pointsController.lines);
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
            this.interfaceController.panel.notifier.text = 'Press start to spin';
            this.interfaceController.enableSpinAndAuto();
        }
    }

    takeWin = async () => {
        this.interfaceController.disableInterface();
        this.interfaceController.enableSpeedUpTransferWin();

        // FIXME: Rethink about it
        if (this.interfaceController.alertWindow.isOn)
            this.interfaceController.hideAlert();

        // Wait transfering win
        await this.transferUserWin();

        // Disable transfer speed up if money already transfered
        this.interfaceController.disableSpeedUpTransferWin();

        // After transfering win enable interface
        this.interfaceController.enableInterface();
        this.setSpinPossibility();
    }

    // Transfer win cash to user's cash
    transferUserWin = () => {
        return new Promise(resolve => {
            // Transfer duration in ms
            const transferDuration = 2000;
            // Delay between each iteration in ms
            const delayBetweenIteration = 50;

            // Amount of iterations
            const iterationsAmount = transferDuration / delayBetweenIteration;

            // Delta of user cash between iterations
            userWinTransferDelta = Math.ceil(this.pointsController.userWin / iterationsAmount);

            const intervalId = setInterval(() => {
                // If last transfer iteration
                if (this.pointsController.userWin - userWinTransferDelta <= 0) {
                    // Transfer rest userWin pooint to userCash
                    this.pointsController.userCash += this.pointsController.pointsToCoins(this.pointsController.userWin);

                    // Reset user win
                    this.pointsController.userWin = 0;

                    clearInterval(intervalId);

                    // Resolve promise when transfering is done
                    resolve();
                } else {
                    // Change values on delta
                    this.pointsController.userCash += this.pointsController.pointsToCoins(userWinTransferDelta);
                    this.pointsController.userWin -= userWinTransferDelta;
                }
            }, delayBetweenIteration);
        });
    }

    speedUpTakeWin = () => {
        userWinTransferDelta *= 2;
        this.interfaceController.disableSpeedUpTransferWin();
    }

    getPlayerData = async () => {
        try {
            return (await axios.post('http://admin.chcgreen.org/getplayerinfo')).data;
        } catch(err) {
            console.log(err);
        }
    }

    // Getting spin data
    getSpinResponse = async () => {
        try {
            const response = await axios.post('http://admin.chcgreen.org/spin', {
                lines_amount: this.pointsController.lines,
                bet_per_line: this.pointsController.betPerLine,
                denomination: this.pointsController.denomination * 100,
                game: this.gameName
            });

            return response.data;
        } catch(err) {
            console.log(err);
            return mockResponseFreeSpin;
        }
    }

    spin = () => {
        // FIXME: Rethink about it
        if (this.interfaceController.alertWindow.isOn) {
            console.log('hide alert');
            this.interfaceController.hideAlert();

            return;
        }

        if (this.bonusSpins.on) {
            console.log('Start bonus spins');

            // Hide alert when bonus spins starts
            this.interfaceController.hideAlert();

            this.interfaceController.disableInterface();

            this.bonusSpin();
        } else {
            console.log('normal spin');
            this.getDataAndSpin();
        }
    }

    getDataAndSpin = () => {
        this.interfaceController.panel.notifier.text = 'Fetching data...';
        // Disable whole interface
        this.interfaceController.disableInterface();

        this.getSpinResponse().then(result => {
            console.log(result);
            this.spinResponse = result;

            if (this.spinResponse.bonus_spins) {
                this.bonusSpins.on = true;
                this.bonusSpins.spins = this.spinResponse.bonus_spins.spins;
                this.bonusSpins.currentSpinIndex = 0;
                this.bonusSpins.totalSpins = this.spinResponse.bonus_spins.spins.length;
            }

            // Decrease user cash
            this.pointsController.userCash -= this.pointsController.pointsToCoins(this.pointsController.totalBet);

            // Clear notifier
            this.interfaceController.panel.notifier.clear();

            // Spin reels to given final symbols
            this.startReels(this.spinResponse.final_symbols);
        });
    }

    bonusSpin = () => {
        this.bonusSpins.currentSpinIndex++;

        this.interfaceController.panel.notifier.text = `Free spin #${this.bonusSpins.currentSpinIndex}`;

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

    // All reels has stopped event
    reelsHasStopped = async () => {
        this.interfaceController.disableStop();

        // Checking is there bonus spins
        if (this.bonusSpins.on) {
            // If bonus spins dropped
            if (this.bonusSpins.currentSpinIndex === 0) {
                this.bonusSpins.on = true;

                // Show win lines and transfer win from regular spin
                await this.linesController.showWinningLines(this.spinResponse.spin_result, winCashInLine => {
                    this.pointsController.userWin += winCashInLine;
                    this.interfaceController.panel.notifier.text = `You won ${this.pointsController.userWin} points`;
                });

                // Show alert and wait for user to press start btn
                this.interfaceController.showAlert(`You won ${this.bonusSpins.totalSpins} bonus spins`);

                this.interfaceController.enableSpeedUpTransferWin();
                // Transfer user regular spin win
                await this.transferUserWin();

                this.interfaceController.panel.notifier.text = `You won ${this.bonusSpins.totalSpins} free spins`;

                // Enable spin btn to start bonus spins
                this.interfaceController.enableSpin();

                return;
            }

            const previousBonusSpin = this.bonusSpins.spins[this.bonusSpins.currentSpinIndex - 1];
            // If user won on bonus spin
            if (previousBonusSpin.won) {
                // Show win lines and transfer win from regular spin
                await this.linesController.showWinningLines(previousBonusSpin.spin_result, winCashInLine => {
                    this.pointsController.userWin += winCashInLine;
                    this.interfaceController.panel.notifier.text = `You won ${this.pointsController.userWin} points`;
                });
            }

            // If no more bonus spins
            if (this.bonusSpins.currentSpinIndex === this.bonusSpins.totalSpins) {
                this.interfaceController.panel.notifier.text = `Free spins ended. You won ${this.pointsController.userWin} points`;

                // Show alert
                this.interfaceController.showAlert(`Free spins ended, you won ${this.pointsController.userWin} points in ${this.bonusSpins.totalSpins} spins`);

                this.bonusSpins.on = false;

                // Check if user won
                if (this.pointsController.userWin > 0) {
                    // If user won something
                    this.interfaceController.setTakeWin();
                } else {
                    // If no win at all
                    this.interfaceController.enableInterface();
                    this.setSpinPossibility();
                }

                return;
            }

            // Spin bonus spin
            this.bonusSpin();

            return;
        }

        // Regular spin ended
        if (this.spinResponse.won) { // Win case
            // Show all winning lines
            // and update user win line by line in callback
            await this.linesController.showWinningLines(this.spinResponse.spin_result, winCashInLine => {
                this.pointsController.userWin += winCashInLine;
                this.interfaceController.panel.notifier.text = `You won ${this.pointsController.userWin} points`;
            });

            // Enable possibility to take win or gamble
            this.interfaceController.setTakeWin();
            this.interfaceController.panel.notifier.text = 'Take win or gamble';
        } else { // Lose case
            this.interfaceController.enableInterface();
            this.setSpinPossibility();
        }

    }

}
