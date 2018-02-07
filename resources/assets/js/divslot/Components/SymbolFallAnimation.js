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
        this.symbolNode.style.position = 'absolute';
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
            this.symbolNode.style.transition = `transform 450ms ${settings.fallAnimTimingFunc}`;
            this.symbolNode.style.transform = `translateY(${(settings.numOfRows - 1 - this.indexInReel) * 100}%)`;

            setTimeout(() => {
                resolve();
            }, settings.delayBetweenFallingSymbols);
        });
    }
}
