import Symbol from './SymbolFallAnimation';

class FallReel {
    /**
     * Create reel with starting symbols in it
     * @param {Number} reelIndex Index of reel in Game
     * @param {Function} onStop Function to call when reel has stopped
     */
    constructor(reelIndex, onStop) {
        this.finalSymbols = [];

        this.reelNode;
        this.reelIndex = reelIndex;

        this.props = {
            onStop
        };

        this._init();
    }

    _init() {
        this.reelNode = document.createElement('div');
        this.reelNode.className = 'reel';
        this.reelNode.style.transition = `transform ${settings.spinAnimationTimeInMs}ms ${settings.spinAnimTimingFunc}`;
        this.reelNode.style.height = `${settings.symbolSize * (settings.numOfRows + 1)}px`; // + bonus slot for hidden symbol
        this.reelNode.style.width = `${settings.symbolSize}px`;

        // Init starting symbols
        for (let i = 0; i < settings.numOfRows; i++) {
            const symbol = new Symbol(Math.floor(Math.random() * settings.symbols.length));
            symbol.node.style.transform = `translateY(${settings.symbolSize * (settings.numOfRows - i)}px)`;

            // FIXME: Remove this useless shit
            this.finalSymbols.unshift(symbol);
            // Add symbol into reel node
            this.reelNode.prepend(symbol.node);
        }

        const reelWrapperNode = document.createElement('div');
        reelWrapperNode.className = 'reel_wrapper';
        reelWrapperNode.style.width = `${settings.symbolSize}px`;
        reelWrapperNode.style.height = `${settings.symbolSize * settings.numOfRows}px`;
        reelWrapperNode.style.margin = `0 ${settings.spaceBetweenReels / 2}px`;
        reelWrapperNode.appendChild(this.reelNode);

        document.querySelector('#reels_container').appendChild(reelWrapperNode);
    }

    async spin() {
        // Drop each symbol in reel with delay
        for (let i = 0; i < this.finalSymbols.length; i++) {
            await this.finalSymbols[i].fall(i);
        }
    }

    /**
     * Remove old symbols from reel
     */
    removeOldSymbols() {
        while (this.reelNode.firstChild) {
            this.reelNode.removeChild(this.reelNode.firstChild);
        }
    }

    /**
     * Add final symbols to reel
     * @param {Array<Number>} finalSymbolsMap Array of Symbols
     */
    addFinalSymbols(finalSymbolsMap) {
        let finalSymbols = [];

        for (let i = 0; i < finalSymbolsMap.length; i++) {
            finalSymbols.push(new Symbol(finalSymbolsMap[i], { symbolHasFelled: this._symbolHasFelled }));
        }

        this.finalSymbols = finalSymbols.slice().reverse();

        this._addSymbols(finalSymbols);
    }

    /**
     * Add symbols to reel
     * @param {Array<Symbol>} symbolsArr Array of Symbols to add to reel
     */
    _addSymbols(symbolsArr) {
        for (let i = 0; i < symbolsArr.length; i++) {
            this.reelNode.appendChild(symbolsArr[i].node);
        }
    }

    _symbolHasFelled = (symbolIndexInReel) => {
        if (symbolIndexInReel === settings.numOfRows - 1) {
            this.props.onStop(this.reelIndex);
        }
    }
}

export default FallReel;
