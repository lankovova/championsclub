import { raf } from '../Helpers/windowHelper';
import { getAnimDuration } from './../Helpers/utils';

export const ANIMATION_FPS = 13;

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
        this.symbolNode.className = 'symbol';

        this.overflowLayer = document.createElement('div');
        this.overflowLayer.classList.add('overflow', 'off');
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
            // If animation for this symbol exists then apply it
            if (settings.symbols[this.symbolNum].animation) {
                // Get symbol animation data
                const symbolAnimationData = settings.symbols[this.symbolNum].animation;

                // Calculate animation duration in ms
                const animDuration = getAnimDuration(symbolAnimationData.frames, ANIMATION_FPS);

                this.symbolNode.style.background = `url('${settings.symbolsAnimationsPath + symbolAnimationData.image}')`;
                this.symbolNode.style.animation = `symbolAnimation ${animDuration}ms steps(${symbolAnimationData.frames}) infinite`;
            } else if (settings.animationType !== 'fall') {
                this.symbolNode.style.animation = 'oldSymbolAnimation 1000ms infinite';
            }
        });

    }

    stopAnimation() {
        this.symbolNode.style.animation = '';
    }

    conceal() {
        // Add conceled image
        this.overflowLayer.style.background = `url(${settings.symbolsAnimationsPath + settings.revealAnimation.image})`;
        this.overflowLayer.style.backgroundSize = `${(settings.revealAnimation.frames + 1) * 100}% 100%`;
    }

    reveal() {
        return new Promise(resolve => {
            const onAminEnd = (event) => {
                // Get event fired element
                const el = event.target;
                // Remove reveal image
                el.style.background = '';
                el.style.backgroundSize = '';
                // Remove animation
                el.style.animation = '';
                // Remove animation listener
                el.removeEventListener('animationend', onAminEnd);
                // Resolve when animation has ended
                // and browser is ready to draw next frame
                raf(() => resolve());
            }

            // Add animation end listener
            this.overflowLayer.addEventListener('animationend', onAminEnd);
            // Count animation duration
            const animDuration = getAnimDuration(settings.revealAnimation.frames, ANIMATION_FPS);
            // Start revealing animation
            this.overflowLayer.style.animation = `symbolAnimation ${animDuration}ms steps(${settings.revealAnimation.frames}, end)`;
        });
    }

    blurDark() {
        this.overflowLayer.classList.add('on');
        this.overflowLayer.classList.remove('off');
    }
    unblur() {
        this.overflowLayer.classList.add('off');
        this.overflowLayer.classList.remove('on');
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
