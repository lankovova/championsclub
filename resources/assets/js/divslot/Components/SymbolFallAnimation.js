import Symbol from "./Symbol";
import { transitionEnd } from "../events";

export default class SymbolFallAnimation extends Symbol {
    constructor(symbolNumber, props) {
        super(symbolNumber);

        this.props = props;

        this.indexInReel;

        this.initListeners();
    }

    initSymbol() {
        super.initSymbol();
        this.symbolNode.style.position = "absolute";
        this.symbolNode.style.transition = `transform 300ms ${settings.fallAnimTimingFunc}`;
    }

    initListeners() {
        this.node.addEventListener(transitionEnd, () => {
            this.props.symbolHasFelled(this.indexInReel);
        });
    }

    fall(indexInReel) {
        // Next symbol fall faster than previous
        return new Promise(resolve => {
            this.indexInReel = indexInReel;
            this.symbolNode.style.transition = `transform ${1000 / 6 * (settings.numOfRows - this.indexInReel)}ms ${settings.fallAnimTimingFunc}`;
            this.symbolNode.style.transform = `translateY(${(settings.numOfRows - this.indexInReel) * settings.symbolSize}px)`;

            setTimeout(() => {
                resolve();
            }, settings.delayBetweenFallingSymbols);
        });
    }
}
