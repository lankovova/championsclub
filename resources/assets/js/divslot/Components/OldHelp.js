import {transitionEnd} from '../events';

export default class OldHelp {

    constructor(props) {
        this.props = props;
        this.slides = document.getElementsByClassName("help__slide");
        this.slidesAmount = this.slides.length;
        this.currentSlide = 0;
        for (const slide of this.slides) {
            slide.addEventListener(transitionEnd, () => this.onTransitionEndHandler(), false);
        }
    }

    open() {
        if (this.currentSlide === this.slidesAmount) {
            this.reset();
            return;
        }
        this.slides[this.currentSlide].style.transform = "translateY(0)";
        this.currentSlide++;
    }

    reset() {
        for (const slide of this.slides) {
            slide.style.transform = "translateY(-100%)";
        }
        this.currentSlide = 0;
    }

    onTransitionEndHandler() {
        // Enable self invoking button
        this.props.enableSelf();

        // If help window is fully closed
        if (this.currentSlide === 0) {
            this.props.onClose();
        }
    }

    initPaytable() {
        const containers = document.getElementsByClassName("help__prize_container");

        for (const container of containers) {
            // convert to array
            const symbols = container.dataset.symbols.split(' ');
            const paytable = settings.symbols[symbols[0]].paytable;
            const isScatter = settings.symbols[symbols[0]].isScatter;
            const isJoker = container.hasAttribute('data-joker');

            // clear prev values
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }

            for (const pay of paytable) {
                if (+pay !== 0) {
                    const payEl = document.createElement('div');
                    payEl.innerText = isScatter
                                        ? pay * this.betPerLine * this.linesAmount * (isJoker ? 2 : 1)
                                        : pay * this.betPerLine * (isJoker ? 2 : 1);
                    container.prepend(payEl);
                }
            }
        }
    }

    refreshPaytable = (linesAmount=1, betPerLine=1) => {
        this.linesAmount = linesAmount;
        this.betPerLine = betPerLine;

        this.initPaytable();
    }
}