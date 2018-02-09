import Symbol from './SymbolFallAnimation';
import Reel from './Reel';

export default class FallReel extends Reel {
    /**
     * Create reel with starting symbols in it
     * @param {Number} reelIndex Index of reel in Game
     * @param {Function} onStop Function to call when reel has stopped
     */
    constructor(reelIndex, onStop) {
        super(reelIndex, onStop);
    }

    _init() {
        this.reelNode = document.createElement('div');
        this.reelNode.className = 'reel';
        this.reelNode.style.transition = `transform ${settings.spinAnimationTimeInMs}ms ${settings.spinAnimTimingFunc}`;
        this.reelNode.style.height = `${settings.symbolHeight * settings.numOfRows}px`;
        this.reelNode.style.width = `${settings.symbolWidth}px`;

        // Spawn initial symbols
        let spawnedSymbols = [];
        for (let i = 0; i < settings.numOfRows; i++) {
            let symbol;
            let symbolCanPass;

            // Generate only uniqe and no scatters at all
            do {
                symbolCanPass = true;
                symbol = new Symbol(Math.floor(Math.random() * settings.symbols.length));
                // Rerandom if symbol is scatter
                if (symbol.isScatter) {
                    symbolCanPass = false;
                    continue;
                }
                // Rerandom if randomed symbol is not unique in reel
                const notUniqeSymbol = spawnedSymbols.find(el => el.symbolNum === symbol.symbolNum);
                if (notUniqeSymbol) {
                    symbolCanPass = false;
                }
            } while (!symbolCanPass);

            symbol.node.style.transform = `translateY(${(settings.numOfRows - 1 - i) * 100}%)`;

            spawnedSymbols.push(symbol);
            this.finalSymbols.unshift(symbol);
            // Add symbol into reel node
            this.reelNode.prepend(symbol.node);
        }

        const reelWrapperNode = document.createElement('div');
        reelWrapperNode.className = 'reel_wrapper';
        reelWrapperNode.style.width = `${settings.symbolWidth}px`;
        reelWrapperNode.style.height = `${settings.symbolHeight * settings.numOfRows}px`;
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
        this._addSymbols(this.finalSymbols);
    }

    /**
     * Add symbols to reel
     * @param {Array<Symbol>} symbolsArr Array of Symbols to add to reel
     */
    _addSymbols(symbolsArr) {
        for (let i = 0; i < symbolsArr.length; i++) {
            symbolsArr[i].node.style.transform = `translateY(-${(i + 1) * 100}%)`;
            this.reelNode.appendChild(symbolsArr[i].node);
        }
    }

    _symbolHasFelled = (symbolIndexInReel) => {
        if (symbolIndexInReel === settings.numOfRows - 1) {
            this.props.onStop(this.reelIndex);
        }
    }
}
