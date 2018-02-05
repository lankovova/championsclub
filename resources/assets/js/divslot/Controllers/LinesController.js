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
            reel.finalSymbols.forEach(symbol => {
                symbol.blurDark();

                // FIXME: Stop symbol animation when line has showed
                // HOTFIXME: Do not animate blured symbol
                symbol.stopAnimation();
            });
        });
    }

    // Remove dark blur layer when all lines has showed
    unblurAllSymbols() {
        this.props.reels.forEach(reel => {
            reel.finalSymbols.forEach(symbol => symbol.unblur());
        });
    }

    // Deletes all lines and stops infinity show winning lines loop
    stopCyclingWinningLines() {
        // If win lines is not showing do nothing
        if (!this.cycleWinningLines) return;

        // Stop showing winning lines check var
        this.cycleWinningLines = false;

        // Delete all lines
        this.winningLines.forEach(line => line.remove());
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
     */
    async showWinningLines(gameResult, addUserWin) {
        // Activate dark layer on all symbols
        this.blurAllSymbols();

        this.winningLines = this.createWinningLines(gameResult);

        for (const line of this.winningLines) {
            // Add new win points for each line
            addUserWin(line.points);

            await this.showWinningLine(line);
        }

        // Resolve promise when all lines has shown
        return new Promise(resolve => resolve());
    }

    /**
     * Show specific line and hide after delay
     * @param {Line} line Line to show
     */
    showWinningLine(line) {
        line.show();

        return new Promise(resolve => {
            setTimeout(() => {
                line.hide();
                resolve();
            }, settings.delayBetweenShowingWinningLines);
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
