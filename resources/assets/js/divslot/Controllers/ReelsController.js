import Reel from '../Components/ReelPicker';
import { getAnimDuration } from './../Helpers/utils';
import { ANIMATION_FPS } from './../Components/Symbol';

let stoppedReelsCounter = 0;

export default class ReelsContorller {
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
            // Add reels to store
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
            (this.shouldStopReels) ? resolve() : setTimeout(resolve, settings.delayBetweenReelsSpin);
        });
    }

    isThereSubstitution(finalSymbolsMap, substitutionSymbolNumber) {
        const reelsToSubstitute = this.getReelsWhereFoundSpecificSymbolInRow(finalSymbolsMap, substitutionSymbolNumber);
        return (reelsToSubstitute.length === 0) ? false : true;
    }

    // Make substitution on symbols map with substitution symbols
    async makeSubstitution(finalSymbolsMap, substitutionSymbolNumber) {
        // Get reels where found symbstitution symbol in center row
        const reelsToSubstitute = this.getReelsWhereFoundSpecificSymbolInRow(finalSymbolsMap, substitutionSymbolNumber);

        // Make substitution in specific reels
        for (let i = 0; i < reelsToSubstitute.length; i++) {
            const reelIndex = reelsToSubstitute[i];

            // Wait for reel to substitute
            await this.reels[reelIndex].substitute(
                [
                    substitutionSymbolNumber,
                    substitutionSymbolNumber,
                    substitutionSymbolNumber
                ]
            );
        }

        // Resolve after all reels have done substitution
        return new Promise(resolve => resolve());
    }

    // Use reveal animation to given final symbols
    async revealReels(finalSymbols) {
        // Place specific bg in all reels symbols
        await Promise.all(this.reels.map(async (reel) => await reel.conceal()));

        // Reveal all symbols to final symbols in reels
        // with some delay
        for (let i = 0; i < this.reels.length; i++) {
            // Extract reel symbols from symbols map
            const extractedReelSymbols = this.getReelSymbolsFromSymbolsMap(finalSymbols, i);

            // Reveal specific symbols in reel
            this.reels[i].reveal(extractedReelSymbols);

            // Calculate dynamic delay between reels
            const revealAnimDuration = getAnimDuration(settings.revealAnimation.frames, ANIMATION_FPS);
            const dynamicDelayBeforeNextReel = revealAnimDuration * 1.25;

            // Resolve promise after delay between reels spin
            await new Promise(resolve => {
                (this.shouldStopReels) ? resolve() : setTimeout(resolve, dynamicDelayBeforeNextReel);
            });
        }
    }

    /**
     * Check if there is a bonus spins dropped
     */
    isThereBonusSpins() {
        let scattersAmount = 0;

        this.reels.forEach(reel => {
            reel.finalSymbols.forEach(symbol => {
                if (symbol.isScatter)
                    scattersAmount++;
            });
        });

        // TODO: Move 3 to individual settings of each game
        return (scattersAmount >= 3) ? true : false;
    }

    /**
     *
     * @param {[][]} symbolsMap
     * @param {Number} specificSymbolNumber
     */
    getReelsWhereFoundSpecificSymbolInRow(symbolsMap, specificSymbolNumber) {
        let reelsNumbers = [];

        for (let i = 0; i < settings.numOfReels; i++) {
            const reelsSymbols = this.getReelSymbolsFromSymbolsMap(symbolsMap, i);

            let allSymbolsIsSubstituitonSymbol = true;
            reelsSymbols.forEach(symbol => {
                if (symbol !== specificSymbolNumber) {
                    allSymbolsIsSubstituitonSymbol = false;
                }
            });

            if (allSymbolsIsSubstituitonSymbol) reelsNumbers.push(i);
        }

        return reelsNumbers;
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
     * @returns {Array<Number|Symbol>} Returns array of reel symbols
     */
    getReelSymbolsFromSymbolsMap(symbolsMap, reelIndex) {
        let resultArray = [];

        for (let i = 0; i < symbolsMap.length; i++) {
            resultArray.push(symbolsMap[i][reelIndex]);
        }

        return resultArray;
    }
}
