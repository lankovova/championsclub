export default class Help {
    constructor(props) {
        this.props = props;

        if (settings.helpType === "slider") {
            this.initSlider();
        }

        this.linesAmount = 1;
        this.betPerLine = 1;
        this.node = props.node;
        this.initPaytable();

        this.node.querySelector('#helpBtnClose').onclick = () => this.onClose();
    }

    initPaytable() {
        const containers = document.getElementsByClassName("help__prize_container");

        for (const container of containers) {
            // convert to array
            const symbols = container.dataset.symbols.split(' ');
            const paytable = settings.symbols[symbols[0]].paytable;
            const isScatter = settings.symbols[symbols[0]].isScatter;

            // clear prev values
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }

            for (const pay of paytable) {
                if (+pay !== 0) {
                    const payEl = document.createElement('div');
                    payEl.innerText = isScatter ?
                        pay * this.betPerLine * this.linesAmount : pay * this.betPerLine;
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

    open() {
        this.node.style.transform = "translateY(0)";
    }

    onClose() {
        this.node.style.transform = "translateY(-100%)";

        // Set proper interface state
        this.props.onClose();
    }

    showNextSlide() {
        if (this.disableButtons) return;
        this.disableButtons = true;
        this.sliderTracker.style.transform = `translateX(-${this.slideLength * this.next()}px)`;
        this.slideCurrent = this.next();
    }

    showPreviousSlide() {
        if (this.disableButtons) return;
        this.disableButtons = true;
        this.sliderTracker.style.transform = `translateX(-${this.slideLength * this.prev()}px)`;
        this.slideCurrent = this.prev();
    }

    next() {
        return (this.slideCurrent + 1) > this.slidesAmount ? 1 : this.slideCurrent + 1;
    }

    prev() {
        return (this.slideCurrent - 1) < 0 ? this.slidesAmount : this.slideCurrent - 1;
    }

    onTransitionEnd() {
        this.sliderTracker.style.transitionDuration = `0ms`;
        if (this.slideCurrent === 0) { // Last slide
            this.sliderTracker.style.transform = `translateX(-${this.slideLength * (this.slidesAmount - 2)}px)`
            this.slideCurrent = this.slidesAmount - 2
        } else if (this.slideCurrent === (this.slidesAmount - 1)) { // First slide
            this.sliderTracker.style.transform = `translateX(-${this.slideLength}px)`
            this.slideCurrent = 1 // default
        }

        setTimeout(() => {
            this.sliderTracker.style.transitionDuration = `${this.trasitionTime}ms`
            this.disableButtons = false
        }, 0)
    }

    initSlider() {
        this.sliderTracker = document.getElementById("helpSliderTracker");
        this.slidesAmount = this.sliderTracker.children.length;
        let firstChild = this.sliderTracker.children[0].cloneNode(true);
        let lastChild = this.sliderTracker.children[this.slidesAmount - 1].cloneNode(true);
        this.sliderTracker.appendChild(firstChild);
        this.sliderTracker.prepend(lastChild);

        this.trasitionTime = 700;
        // renew with new added slides
        this.slidesAmount = this.sliderTracker.children.length;
        this.slideLength = this.sliderTracker.children[0].offsetWidth;
        this.slideCurrent = 1;
        this.disableButtons = false;
        this.sliderTracker.style.transform = `translateX(-${this.slideLength}px)`
        this.sliderTracker.style.transitionDuration = `${this.trasitionTime}ms`

        try {
            document.getElementById("helpBtnNext").addEventListener("click", () => this.showNextSlide());
            document.getElementById("helpBtnPrev").addEventListener("click", () => this.showPreviousSlide());
        } catch (e) {}

        this.sliderTracker.addEventListener("transitionend", () => this.onTransitionEnd(), false);
    }
}