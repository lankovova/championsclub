import { raf } from "../Helpers/windowHelper";

export default class Reel {
    constructor(reelIndex, onStop) {
        this.finalSymbols = [];

        this.reelNode;
        this.reelIndex = reelIndex;

        this.props = {
            onStop
        };

        this._init();

    }

    /**
     * Substitutes all symbols in reel starting from top to bottom
     * with special given symbols
     * @param {Number[]} symbols Array of symbols number to substitute
     */
    async substitute(symbols) {
        // Gradually substitute all symbols in reel with given symbol with delay between
        for (let i = this.finalSymbols.length - 1; i >= 0; i--) {
            // Skip already placed symbol
            if (this.finalSymbols[i].symbolNum === symbols[this.finalSymbols.length - 1 - i]) continue;

            await new Promise(resolve => {
                this.finalSymbols[i].changeSymbol(symbols[this.finalSymbols.length - 1 - i]);

                setTimeout(resolve, settings.delayBetweenSymbolsSubstitute);
            });
        }

        return new Promise(resolve => resolve());
    }

    /**
     * Conceal symbols behind special background
     */
    async conceal() {
        this.finalSymbols.forEach(symbol => {
            symbol.stopAnimation();
            symbol.conceal();
        });
        return new Promise(resolve => {
            // TODO: Resolve when all symbols has concealed
            // to do this concealed animation needed
            // 200 = conceal animation time
            setTimeout(resolve, 200);
        });
    }

    /**
     * Reveal all symbols in reel starting from top to bottom
     * with special given symbols
     * @param {Number[]} symbols Array of symbols number to reveal
     */
    async reveal(symbols) {
        // Gradually substitute all symbols in reel with given symbol
        for (let i = symbols.length - 1; i >= 0; i--) {
            // Change symbol to correct one
            this.finalSymbols[i].changeSymbol(symbols[symbols.length - 1 - i]);
            // Wait for symbol to reveal
            await this.finalSymbols[i].reveal();
        }
        // Notify reels controller when all symbols has revealed
        this.props.onStop(this.reelIndex);
    }

}
