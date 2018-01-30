import {transitionEnd} from '../events';

const RANDOMED_SYMBOLS_AMOUNT = 15;
const DELAY_BETWEEN_SYMBOLS = 300;
const PRESTART_GIF_DURATION = 1800;
const SLEEP_DURATION_AFTER_RANDOMIZING = 500;

export default class SubstitutionBlock {
    constructor(props) {
        this.node = props.node;
        this.symbolNode = this.node.querySelector('#substitutionSymbol');
        this.paytableNode = this.node.querySelector('#substitutionPaytable');
    }

    show() {
        // Display block itself
        this.node.style.display = "block";

        // Show animation prestart
        this.node.style.backgroundImage = `url('${settings.imagesPath}substitution/substitutionPrestart.png')`;
    }

    hide() {
        // Hide block
        this.node.style.display = "none";

        // Reset content of nodes
        this.reset();
    }

    // Reset block content and move it to start position
    reset() {
        this.node.style.backgroundImage = '';
        this.symbolNode.style.backgroundImage = '';
        this.paytableNode.innerHTML = '';

        // Reset block position
        this.node.classList.remove('finish');
        this.node.classList.add('start');
    }

    /**
     * Animate randomizing symbol in substitution block
     * @param {Number} substitutionSymbol Number of substitution symbol
     */
    async startRandomizing(substitutionSymbol) {
        const symbols = this.getRanomizedArrayOfSymbols(substitutionSymbol);

        await this.showPreRandomAnimation();

        await this.animateSymbolRandomizing(symbols, substitutionSymbol);

        return new Promise(resolve => resolve());
    }

    /**
     * Returns array of randomized symbol
     * @param {Number} substitutionSymbol Number of substitution symbol
     */
    getRanomizedArrayOfSymbols(substitutionSymbol) {
        let randomizedSymbols = [];

        for (let i = 0; i < RANDOMED_SYMBOLS_AMOUNT - 1; i++) {
            let symbol;

            // Rerandom if symbol is the same as previous
            do {
                symbol = Math.floor(Math.random() * settings.symbols.length);
            } while (symbol === randomizedSymbols[randomizedSymbols.length - 1]);

            // For last symbol
            if (i === 14) {
                // Rerandom if symbols is substitution symbol
                // or symbol is the same as previous
                while (
                    symbol === substitutionSymbol ||
                    symbol === randomizedSymbols[randomizedSymbols.length - 1]
                ) {
                    symbol = Math.floor(Math.random() * settings.symbols.length);
                }
            }

            // Add correctly randomized symbol to result array
            randomizedSymbols.push(symbol);
        }

        // Add substitution symbol as last symbol in randomed array
        randomizedSymbols.push(substitutionSymbol);

        return randomizedSymbols;
    }

    showPreRandomAnimation() {
        return new Promise(resolve => {
            // Start animation
            this.node.style.backgroundImage = `url('${settings.imagesPath}substitution/substitutionProgress.gif')`;

            setTimeout(() => {
                // Set final background to substitution block
                this.node.style.backgroundImage = `url('${settings.imagesPath}substitution/substitutionBlock.png')`;

                resolve();
            }, PRESTART_GIF_DURATION);
        });
    }

    async animateSymbolRandomizing(randomizedSymbols, substitutionSymbol) {
        // Show each symbol from randomed symbols array every 200ms
        for (let i = 0; i < randomizedSymbols.length; i++) {
            await new Promise(resolve => {
                setTimeout(() => {
                    const symbolImage = settings.symbols[randomizedSymbols[i]].image;
                    this.symbolNode.style.backgroundImage = `url('${settings.symbolsImagesPath + symbolImage}')`;
                    resolve();
                }, DELAY_BETWEEN_SYMBOLS);
            });
        }

        // Get symbol paytable
        const symbolPaytable = settings.symbols[substitutionSymbol].paytable;

        // Write symbol paytable
        for (let i = symbolPaytable.length - 1; i >= 0; i--) {
            // Skip if win is zero
            if (symbolPaytable[i] === 0) continue;

            this.paytableNode.innerHTML += `${i + 1} - ${symbolPaytable[i]}<br />`;
        }

        return new Promise(resolve => setTimeout(resolve, SLEEP_DURATION_AFTER_RANDOMIZING));
    }

    // Move symbol to finish position
    moveSymbolToFinishPos() {
        substitutionBlock.classList.remove('start');
        substitutionBlock.classList.add('finish');

        const substBlockMoveEnds = (resolve) => {
            // Resolve when animation is complete
            resolve();

            // Remove event listener for optimization
            substitutionBlock.removeEventListener(transitionEnd, substBlockMoveEnds);
        }

        return new Promise(resolve => {
            // When substitution block denstinates finish position
            substitutionBlock.addEventListener(transitionEnd, () => {
                substBlockMoveEnds.call(this, resolve);
            });
        });
    }
}