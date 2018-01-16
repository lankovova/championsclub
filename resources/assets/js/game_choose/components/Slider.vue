<template>
    <div class="slider" >
        <div class="slider__tracker" ref="sliderTracker">
            <div v-for="(slide, key) in slides" :key="key" class="slide">
                <div class="slide__part-container">
                    <a v-for="(item, key) in slide" 
                        :key="key" 
                        :class="'slide__part slide__part--' + item.class"
                    ></a>
                </div>
            </div>
        </div>
        <div class="slider__counter">{{ $t("slide_count", {current: curr, amount: slides.length}) }}</div>
    </div>
</template>

<script>
import EventBus from "../event-bus.js"

export default {
    data() {
        return {
            start: 1,
            current: 1,
            trasitionTime: 500,
            slides: [
                [
                    {url: '', class:'book-of-winner'},
                    {url: '', class:'kings-of-jewels'},
                    {url: '', class:'crazy-barmen'},
                    {url: '', class:'scatter-wins'},
                    {url: '', class:'computer-world'},
                ],
                [
                    {url: '', class:'gates-of-avalon'},
                    {url: '', class:'money'},
                    {url: '', class:'nautilus'},
                    {url: '', class:'golden-harvest'},
                    {url: '', class:'bananas'},
                ],
                [
                    {url: '', class:'mariner'},
                    {url: '', class:'riddle-of-the-sphinx'},
                    {url: '', class:'roll-of-ramses'},
                    {url: '', class:'snow-white'},
                    {url: '', class:'tropical-fruit'},
                ],   
            ],
        }
    },
    computed: {
        amount() {
            return this.$refs.sliderTracker.childElementCount
        },
        curr() {
            let slide;
            if (this.current > this.slides.length ) {
                slide = 1
            } else if (this.current === 0) {
                slide = this.slides.length
            } else {
                slide = this.current
            }
            return slide
        }
    },
    methods: {
        showNextSlide() {
            EventBus.$emit("slide-transition-start")
            this.$refs.sliderTracker.style.transform = `translateX(-${100 * this.next()}vw)`
            this.current = this.next()
        },
        showPreviousSlide() {
            EventBus.$emit("slide-transition-start")
            this.$refs.sliderTracker.style.transform = `translateX(-${100 * this.prev()}vw)`
            this.current = this.prev()
        },
        next() {
            return (this.current + 1) > this.amount ? 1 : this.current + 1
        },
        prev() {
            return (this.current - 1) < 0 ? this.amount : this.current - 1
        },
        createSlides() {
            // Create copies of first and last slides
            let firstChild = this.$refs.sliderTracker.firstChild.cloneNode(true)
            let lastChild = this.$refs.sliderTracker.lastChild.cloneNode(true)
            this.$refs.sliderTracker.appendChild(firstChild)
            this.$refs.sliderTracker.prepend(lastChild)
            // Setup tracker
            this.$refs.sliderTracker.style.width = `${100 * (this.amount)}vw`
            this.$refs.sliderTracker.style.transform = `translateX(-${100 * this.start}vw)`
            this.$refs.sliderTracker.style.transition = `${this.trasitionTime}ms`
        },
        onTransitionEnd() {
            EventBus.$emit("slide-transition-end")
            this.$refs.sliderTracker.style.transition = `0ms`;
            if (this.current === 0) { // Last slide
                    this.$refs.sliderTracker.style.transform = `translateX(-${100 * (this.amount - 2)}vw)`
                    this.current = this.amount - 2
                } else if (this.current === (this.amount - 1)) { // First slide
                    this.$refs.sliderTracker.style.transform = "translateX(-100vw)"
                    this.current = this.start
                }
            setTimeout(() => {
                this.$refs.sliderTracker.style.transition = `${this.trasitionTime}ms`
            }, 0)
        }
    },
    mounted() {
        this.createSlides()
        this.$refs.sliderTracker.addEventListener("transitionend", () => this.onTransitionEnd(), false);
        EventBus.$on("show-previous-slide", () => this.showPreviousSlide())
        EventBus.$on("show-next-slide", () => this.showNextSlide())
    }
}
</script>
