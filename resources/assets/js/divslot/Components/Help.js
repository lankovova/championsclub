export default class Help {

    constructor() {
        if (settings.helpType === "slider") {
            this.initSlider();
        }
        this.initPrizeContainers();
        document.getElementById("helpBtnClose").addEventListener("click", () => this.onClose());
    }

    initPrizeContainers() {
        let containers = document.getElementsByClassName("help__prize_container");
        
        for (let container of containers) {
            // convert to array 
            let symbols = container.dataset.symbols.split(' ');
            let paytable = settings.symbols[symbols[0]].paytable;
            
            for (const pay of paytable) {
                if (+pay !== 0) {
                    let payEl = document.createElement('div');
                    payEl.innerText = pay;
                    container.prepend(payEl);
                }  
            }   
        }
    }

    onClose() {
        document.getElementById("help").style.transform = "translateY(-100%)";
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