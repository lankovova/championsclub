import { raf } from "../Helpers/windowHelper";

const ANIMATION_FPS = 13;

export default class Symbol {
    constructor(symbolNumber) {
        this.symbolNum = symbolNumber;
        this.highlighted = false;
        this.symbolNode;

        this.initSymbol();
    }

    get isScatter() {
        return (settings.symbols[this.symbolNum].isScatter) ? true : false;
    }

    initSymbol() {
        this.symbolNode = document.createElement('div');
        this.symbolNode.style.position = 'relative';

        this.symbolNode.style.width = `${settings.symbolWidth}px`;
        this.symbolNode.style.height = `${settings.symbolHeight}px`;
        this.symbolNode.style.backgroundImage = `url('${settings.symbolsImagesPath + settings.symbols[this.symbolNum].image}')`;
        this.symbolNode.style.backgroundSize = '100% 100%';
        this.symbolNode.style.backgroundPosition = 'center center';
        this.symbolNode.style.backgroundRepeat = 'no-repeat';

        this.overflowLayer = document.createElement('div');
        this.overflowLayer.style.position = 'absolute';
        this.overflowLayer.style.top = '0';
        this.overflowLayer.style.left = '0';
        this.overflowLayer.style.width = '100%';
        this.overflowLayer.style.height = '100%';
        this.symbolNode.appendChild(this.overflowLayer);
    }

    changeSymbol(symbolNum) {
        this.symbolNum = symbolNum;
        this.symbolNode.style.backgroundImage = `url('${settings.symbolsImagesPath + settings.symbols[symbolNum].image}')`;
    }

    animate() {
        // Stop animation here to play it from start
        this.stopAnimation();

        raf(() => {
            if (settings.gameType === 'old' && settings.animationType !== 'fall') {
                this.symbolNode.style.animation = `oldSymbolAnimation 1000ms infinite`;
                return;
            }

            // If animation for this symbol exists then apply it
            if (settings.symbols[this.symbolNum].animation) {
                // Get symbol animation data
                const symbolAnimationData = settings.symbols[this.symbolNum].animation;

                // Calculate animation duration in ms
                const animDuration = 1000 * symbolAnimationData.frames / ANIMATION_FPS;

                this.symbolNode.style.background = `url('${settings.symbolsAnimationsPath + symbolAnimationData.image}')`;
                this.symbolNode.style.animation = `symbolAnimation ${animDuration}ms steps(${symbolAnimationData.frames}) infinite`;
            }
        });

    }

    stopAnimation() {
        this.symbolNode.style.animation = '';
    }

    blurDark() {
        this.overflowLayer.style.backgroundColor = 'rgba(0,0,0,0.6)';
    }
    unblur() {
        this.overflowLayer.style.backgroundColor = '';
    }

    get node() {
        return this.symbolNode;
    }

    get x() {
        return this.symbolNode.getBoundingClientRect().left - document.querySelector('#reels_container').getBoundingClientRect().left;
    }

    get y() {
        return this.symbolNode.getBoundingClientRect().top - document.querySelector('#reels_container').getBoundingClientRect().top;
    }
}
