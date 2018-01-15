import Reel from '../Components/ReelPicker';

let stoppedReelsCounter = 0;

class ReelsContorller {
    /**
     * Creates reel controller in specific node
     * @param {HTMLElement} containerNode HTMLNode to place reel in
     * @param {Object} props Props from parent
     */
    constructor(containerNode, props) {
        this.props = props;

        this.container = containerNode;
        this.reels = [];
        this.shouldStopReels = false;

        this._initReels(this.container);
    }

    _initReels() {
        const reelsContainer = document.createElement('div');
        reelsContainer.id = 'reels_container';
        reelsContainer.className = 'reels_container';
        reelsContainer.style.margin = `0 -${settings.spaceBetweenReels / 4}px`;

        this.container.appendChild(reelsContainer);

        for (let i = 0; i < settings.numOfReels; i++) {
            // Fill created reel with random symbols
            this.reels.push(new Reel(i, this.onReelStop));
        }
    }

    /**
     * Start reels animation based on animationType
     * @param {Number[]} finalSymbolsMap Map of final symbols
     */
    startReels(finalSymbolsMap) {
        if (settings.animationType === 'fall') {
            this.spinFallReels(finalSymbolsMap);
        } else {
            this.spinReels(finalSymbolsMap);
        }
    }

    /**
     * Spin all reels to final symbols
     * @param {Number[][]} finalSymbolsMap Map of final symbols
     */
    async spinReels(finalSymbolsMap) {
        // For each reel
        for (let i = 0; i < this.reels.length; i++) {
            let finalSymbols = this.getReelSymbolsFromSymbolsMap(finalSymbolsMap, i);

            // Wait previous reel to resolve before spinning next
            await this.spinReel(this.reels[i], finalSymbols);
        }
    }

    /**
     * Spin all reels to final symbols
     * @param {Number[][]} finalSymbolsMap Map of final symbols
     */
    async spinFallReels(finalSymbolsMap) {
        // For each reel
        for (let i = 0; i < this.reels.length; i++) {
            let finalSymbols = this.getReelSymbolsFromSymbolsMap(finalSymbolsMap, i);

            // Clear reel
            this.reels[i].removeOldSymbols();

            // Add final symbols to reel
            this.reels[i].addFinalSymbols(finalSymbols);
        }

        // Delay before start reels spin
        await (() => new Promise(resolve => setTimeout(resolve, settings.delayBeforeStartReelsSpin)))();

        // For each reel
        for (let i = 0; i < this.reels.length; i++) {

            // Wait previous reel to resolve before spinning next
            await this.spinReel(this.reels[i]);
        }
    }

    /**
     * Spins the given reel
     * @param {Reel} reel Reel to spin
     */
    spinReel(reel, finalSymbols) {
        reel.spin(finalSymbols);

        // Resolve promise after delay between reels spin
        return new Promise(resolve => {
            if (this.shouldStopReels) {
                resolve();
            } else {
                setTimeout(() => {
                    resolve();
                }, settings.delayBetweenReelsSpin);
            }
        });
    }

    onReelStop = reelIndex => {
        stoppedReelsCounter++;

        // Check if last reel has stopped
        if (stoppedReelsCounter === this.reels.length) {
            // Set previous delay betwwen reels spin start
            this.shouldStopReels = false;

            // Reset counter
            stoppedReelsCounter = 0;

            this.props.reelsHasStopped();
        }
    }

    stopReels() {
        this.shouldStopReels = true;
    }

    /**
     * Get array of reel symbols from symbols map
     * @param {Array<Array>} symbolsMap Symbols map in two dimensional array
     * @param {Number} reelIndex Reel index
     * @returns {Array<Symbol>} Returns array of reel symbols
     */
    getReelSymbolsFromSymbolsMap(symbolsMap, reelIndex) {
        let resultArray = [];

        for (let i = 0; i < symbolsMap.length; i++) {
            resultArray.push(symbolsMap[i][reelIndex]);
        }

        return resultArray;
    }
}

export default ReelsContorller;
