<template>
    <div class="slider" >
        <div class="slider__tracker" ref="sliderTracker">
            <div v-for="(slide, key) in slides" :key="key" class="slide">
                <div class="slide__part-container">
                    <a v-for="(item, key) in slide" 
                        :key="key" 
                        :class="'slide__part slide__part--' + item.class"
                        :href="'/' + item.class"
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
                    {class:'book-of-winner'},
                    {class:'sevens-on-fire-plus'},
                    {class:'sevens-on-fire'},
                    {class:'fire-rage-plus'},
                    {class:'triple-diamond'}
                ],
                [
                    {class:'kings-of-jewels'},
                    {class:'crazy-barmen'},
                    {class:'scatter-wins'},
                    {class:'computer-world'},
                    {class:'hearts'}
                ],
                [
                    {class:'gates-of-avalon'},
                    {class:'money'},
                    {class:'nautilus'},
                    {class:'golden-harvest'},
                    {class:'bananas'}
                ],
                [
                    {class:'mariner'},
                    {class:'riddle-of-the-sphinx'},
                    {class:'roll-of-ramses'},
                    {class:'snow-white'},
                    {class:'tropical-fruit'}
                ],
                [
                    {class:'billiard-world'},
                    {class:'ultra-seven-hot'},
                    {class:'hit-jewels'},
                    {class:'robinson'},
                    {class:'fire-rage'}
                ],
                [
                    {class:'book-of-wins'},
                    {class:'casino-world'},
                    {class:'pepper-seven'},
                    {class:'magic-secret'},
                    {class:'casino-and-stars'}
                ],
                [
                    {class:'beauty-dolphins'},
                    {class:'savanna-queen'},
                    {class:'hot-sevens'},
                    {class:'ice-legend'},
                    {class:'golden-scatter'}
                ],
                [
                    {class:'lucky-ladys-glamor'},
                    {class:'captain'},
                    {class:'hot-slot'},
                    {class:'always-cherry'},
                    {class:'dolphins-pearl'}
                ],
                [
                    {class:'queen-of-hearts'},
                    {class:'bananas-go-bahamas'},
                    {class:'the-money-game'},
                    {class:'lucky-ladys-charm'},
                    {class:'venetiam-carnival'}
                ],
                [
                    {class:'sea-light'},
                    {class:'columbus'},
                    {class:'sharky'},
                    {class:'fire-frenzy'},
                    {class:'golden-harvest'}
                ],
                [
                    {class:'alice-in-wonderland'},
                    {class:'sizzling-hot'},
                    {class:'gryphons-gold'},
                    {class:'book-of-ra'},
                    {class:'crazy-barmen-old'}
                ],
                [
                    {class:'cinema'},
                    {class:'computer-world-old'},
                    {class:'nautilus-old'},
                    {class:''},
                    {class:'gulliver'}
                ],
                // [
                //     {class:''},
                //     {class:''},
                //     {class:''},
                //     {class:''},
                //     {class:''}
                // ],
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
