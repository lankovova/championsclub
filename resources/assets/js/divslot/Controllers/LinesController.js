import Line from '../Components/Line';

let showHideLinesTimeoutId;

export default class LinesController {
    /**
     * @param {HTMLElement} gameWrapperNode
     * @param {Array<Reel>} reels Reels array
     */
    constructor(gameWrapperNode, props) {
        this.lines = [];
        this.gameWrapperNode = gameWrapperNode;
        this.props = props;

        this.winningLines;
        this.cycleWinningLines = false;

        this._createStaticLines();
    }

    /**
     * Create winning lines array of game result
     * @param {Number[][]} gameResult Game result
     */
    createWinningLines(gameResult) {
        let winningLines = [];

        for (const res of gameResult) {
            const lineColor = this._getLineColorBasedOnItsIndex(res.line_index);
            const line = new Line(this.gameWrapperNode, lineColor, res.line_index, res.points, this.props.reels);

            let highlightedSymbols = [];

            for (const sCoor of res.list) {
                // Get reel
                const reel = this.props.reels[sCoor.col];
                // Get winning symbol
                const symbol = reel.finalSymbols[reel.finalSymbols.length - sCoor.row - 1];
                symbol.highlighted = true;

                symbol.animate();
                highlightedSymbols.push(symbol);

                symbol.unblur();

                // Add symbol highlite to line
                line.addSymbolHighlite(sCoor.col, sCoor.row);
            }

            // Handle case when it is line of scatters
            // If there is physical line
            if (res.line_index !== undefined) {
                line.connectHighlites();
            }

            winningLines.push(line);

            for (const symbol of highlightedSymbols) {
                symbol.highlighted = false;
            }
        }

        return winningLines;
    }

    // Activate dark layer on all symbols
    blurAllSymbols() {
        this.props.reels.forEach(reel => {
            reel.finalSymbols.forEach(symbol => symbol.blurDark());
        });
    }

    // Remove dark blur layer when all lines has showed
    unblurAllSymbols() {
        this.props.reels.forEach(reel => {
            reel.finalSymbols.forEach(symbol => symbol.unblur());
        });
    }

    // Remove svg lines
    removeWinningLines() {
        // Delete all lines
        this.winningLines.forEach(line => line.remove());
    }

    // Stop all symbols animation
    stopSymbolsAnim() {
        this.props.reels.forEach(reel => {
            reel.finalSymbols.forEach(symbol => symbol.stopAnimation());
        });
    }

    // Deletes all lines and stops infinity show winning lines loop
    stopCyclingWinningLines() {
        // If win lines is not showing do nothing
        if (!this.cycleWinningLines) return;

        // Stop showing winning lines check var
        this.cycleWinningLines = false;

        // Delete all lines
        this.removeWinningLines();
    }

    // Cycle showing winnning lines until user has took win
    async cycleShowingWinningLines() {
        let iterator = 0;
        this.cycleWinningLines = true;

        while(this.cycleWinningLines) {
            const line = this.winningLines[iterator++ % this.winningLines.length];
            await this.showWinningLine(line);
        }
    }

    /**
     * Show all winning lines
     * @param {Number[][]} gameResult Game result
     * @param {Function} addUserWin Function
     * @param {Number=} duration Duration of line show
     */
    async showWinningLines(gameResult, addUserWin, duration) {
        // Activate dark layer on all symbols
        this.blurAllSymbols();

        this.winningLines = this.createWinningLines(gameResult);

        for (const line of this.winningLines) {
            // Add new win points for each line
            addUserWin(line.points);

            // Set dynamic duration
            const lineShowDuration = (duration) ? duration : this.getLineShowDuration(line.points);

            // Show win line
            await this.showWinningLine(line, lineShowDuration);
        }

        // Resolve promise when all lines has shown
        return new Promise(resolve => resolve());
    }

    /**
     * Show specific line some amount of time
     * @param {Line} line Line to show
     * @param {Number=} [duration=800] Duration how long to show line
     */
    showWinningLine(line, duration=800) {
        line.show();

        return new Promise(resolve => {
            setTimeout(() => {
                line.hide();
                resolve();
            }, duration);
        });
    }

    showAndHideLines(linesAmount) {
        // Hide all lines
        this.lines.forEach(line => line.hide());

        if (typeof showHideLinesTimeoutId !== 'undefined')
            clearTimeout(showHideLinesTimeoutId);

        // Show selected lines
        for (let i = 0; i < linesAmount; i++) {
            this.lines[i].show();
        }

        // Hide after delay
        showHideLinesTimeoutId = setTimeout(() => {
            for (let i = 0; i < linesAmount; i++) {
                this.lines[i].hide();
            }
        }, 1000);
    }

    hideAllLines() {
        if (typeof showHideLinesTimeoutId !== 'undefined')
            clearTimeout(showHideLinesTimeoutId);

        for (let i = 0; i < this.lines.length; i++) {
            this.lines[i].hide();
        }
    }

    /**
     * Show line by index
     * @param {Number} lineIndex lineIndex
     */
    showLineByNumber(lineIndex) {
        for (const line of this.lines) {
            line.hide();
        }
        this.lines[lineIndex].show();
    }

    /**
     * Get line show duration based on its points
     * @param {Number} points
     * @returns {Number} Returns duration in milliseconds
     */
    getLineShowDuration(points) {
        if (points < 10) {
            return 1000;
        } else if (points < 50) {
            return 1200;
        } else if (points < 100) {
            return 1500;
        } else if (points < 500) {
            return 2000;
        } else if (points < 1000) {
            return 3000;
        } else {
            return 3500;
        }
    }

    _createStaticLines() {
        for (let i = 0; i < settings.lineTypes.length; i++) {
            const lineColor = this._getLineColorBasedOnItsIndex(i);

            const line = new Line(this.gameWrapperNode, lineColor, i, 0, this.props.reels);
            line.connectHighlites();
            this.lines.push(line);
        }
    }

    /**
     * Get line color based on index in lineTypes array
     * @param {Number} lineIndex Index of a line in lineTypes array
     * @returns Returns line color in any available css format (rgb, rgba, hex, etc.)
     */
    _getLineColorBasedOnItsIndex(lineIndex) {
        let presenterArr;
        if (settings.gameType === 'old') {
            presenterArr = settings.linePresenter;
        } else {
            presenterArr = lineIndex < 10 ? settings.linePresenterLeftLines : settings.linePresenterRightLines;
        }

        for (const presenter of presenterArr) {
            if (presenter.lineIndex === lineIndex)
                return presenter.color;
        }

        return 'rgb(255, 255, 255)';
    }
}
