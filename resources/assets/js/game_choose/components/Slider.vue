<template>
    <div class="slider" >
        <div class="slider__tracker" ref="sliderTracker">
            <div v-for="(slide, key) in slides" :key="key" class="slide">
                <div class="slide__part-container">
                    <a v-for="(item, key) in slide" 
                        :key="key" 
                        :class="'slide__part slide__part--' + item.class"
                        :href="'/' + item.url"
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
                    {class:'book-of-winner', url:'bookofwinner'},
                    {class:'tropical-fruit', url:'tropicalfruit'},
                    {class:'hit-jewels', url:'hitjewels'},
                    {class:'kings-of-jewels', url:'kingsofjewels'},
                    {class:'computer-world', url:'computerworld'},
                ],
                [
                    {class:'roll-of-ramses', url:'rolloframses'},
                    {class:'pepper-seven', url:'pepperseven'},
                    {class:'magic-secret', url:'magicsecret'},
                    {class:'golden-harvest', url:'goldenharvest'},
                    {class:'lucky-ladys-glamor', url:'luckyladysglamor'},
                ],
                [
                    {class:'bananas', url:'bananas'},
                    {class:'casino-world', url:'casinoworld'},
                    {class:'book-of-wins', url:'bookofwins'},
                    {class:'crazy-barmen', url:'crazybarmen'},
                    {class:'nautilus', url:'nautilus'},
                ],
                [
                    {class:'money', url:'money'},
                    {class:'ice-legend', url:'icelegend'},
                    {class:'casino-and-stars', url:'casinoandstars'},
                    {class:'beauty-dolphins', url:'beautydolphins'},
                    {class:'savanna-queen', url:'savannaqueen'},
                ],
                [
                    {class:'book-of-ra', url:'bookofra'},
                    {class:'computer-world-old', url:'computerworldold'},
                    {class:'bananas-go-bahamas', url:'bananasgobahamas'},
                    {class:'the-money-game', url:'themoneygame'},
                    {class:'lucky-ladys-charm', url:'luckyladyscharm'},
                ],
                [
                    {class:'dolphins-pearl', url:'dolphinspearl'},
                    {class:'fire-frenzy', url:'firefrenzy'},
                    {class:'sea-light', url:'sealight'},
                    {class:'gryphons-gold', url:'gryphonsgold'},
                    {class:'nautilus-old', url:'nautilusold'},
                ],
                [
                    {class:'crazy-barmen-old', url:'crazybarmenold'},
                    {class:'snow-white', url:'snowwhite'},
                    {class:'mariner', url:'mariner'},
                    {class:'riddle-of-the-sphinx', url:'riddleofthesphinx'},
                    {class:'columbus', url:'columbus'},
                ],
                [
                    {class:'gulliver', url:'gulliver'},
                    {class:''},
                    {class:''},
                    {class:''},
                    {class:''}
                ],
                // [
                //     {class:'book-of-winner', url:'bookofwinner'},
                //     {class:'sevens-on-fire-plus', url:'sevensonfireplus'},
                //     {class:'sevens-on-fire', url:'sevensonfire'},
                //     {class:'fire-rage-plus', url:'firerageplus'},
                //     {class:'triple-diamond', url:'triplediamond'}
                // ],
                // [
                //     {class:'kings-of-jewels', url:'kingsofjewels'},
                //     {class:'crazy-barmen', url:'crazybarmen'},
                //     {class:'scatter-wins', url:'scatterwins'},
                //     {class:'computer-world', url:'computerworld'},
                //     {class:'hearts', url:'hearts'}
                // ],
                // [
                //     {class:'gates-of-avalon', url:'gatesofavalon'},
                //     {class:'money', url:'money'},
                //     {class:'nautilus', url:'nautilus'},
                //     {class:'golden-harvest', url:'golden-harvest'},
                //     {class:'bananas', url:'bananas'}
                // ],
                // [
                //     {class:'mariner', url:'mariner'},
                //     {class:'riddle-of-the-sphinx', url:'riddleofthesphinx'},
                //     {class:'roll-of-ramses', url:'rolloframses'},
                //     {class:'snow-white', url:'snowwhite'},
                //     {class:'tropical-fruit', url:'tropicalfruit'}
                // ],
                // [
                //     {class:'billiard-world', url:'billiardworld'},
                //     {class:'ultra-seven-hot', url:'ultrasevenhot'},
                //     {class:'hit-jewels', url:'hitjewels'},
                //     {class:'robinson', url:'robinson'},
                //     {class:'fire-rage', url:'firerage'}
                // ],
                // [
                //     {class:'book-of-wins', url:'bookofwins'},
                //     {class:'casino-world', url:'casinoworld'},
                //     {class:'pepper-seven', url:'pepperseven'},
                //     {class:'magic-secret', url:'magicsecret'},
                //     {class:'casino-and-stars', url:'casinoandstars'}
                // ],
                // [
                //     {class:'beauty-dolphins', url:'beautydolphins'},
                //     {class:'savanna-queen', url:'savannaqueen'},
                //     {class:'hot-sevens', url:'hotsevens'},
                //     {class:'ice-legend', url:'icelegend'},
                //     {class:'golden-scatter', url:'goldenscatter'}
                // ],
                // [
                //     {class:'lucky-ladys-glamor', url:'luckyladysglamor'},
                //     {class:'captain', url:'captain'},
                //     {class:'hot-slot', url:'hotslot'},
                //     {class:'always-cherry', url:'alwayscherry'},
                //     {class:'dolphins-pearl', url:'dolphinspearl'}
                // ],
                // [
                //     {class:'queen-of-hearts', url:'queenofhearts'},
                //     {class:'bananas-go-bahamas', url:'bananasgobahamas'},
                //     {class:'the-money-game', url:'themoneygame'},
                //     {class:'lucky-ladys-charm', url:'luckyladyscharm'},
                //     {class:'venetiam-carnival', url:'venetiamcarnival'}
                // ],
                // [
                //     {class:'sea-light', url:'sealight'},
                //     {class:'columbus', url:'columbus'},
                //     {class:'sharky', url:'sharky'},
                //     {class:'fire-frenzy', url:'firefrenzy'},
                //     {class:'golden-harvest', url:'goldenharvest'}
                // ],
                // [
                //     {class:'alice-in-wonderland', url:'aliceinwonderland'},
                //     {class:'sizzling-hot', url:'sizzlinghot'},
                //     {class:'gryphons-gold', url:'gryphonsgold'},
                //     {class:'book-of-ra', url:'bookofra'},
                //     {class:'crazy-barmen-old', url:'crazybarmenold'}
                // ],
                // [
                //     {class:'cinema', url:'cinema'},
                //     {class:'computer-world-old', url:'computerworldold'},
                //     {class:'nautilus-old', url:'nautilusold'},
                //     {class:'', url:''},
                //     {class:'gulliver', url:'gulliver'}
                // ],
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
        showSlide(number) {
            number = +number
            this.$refs.sliderTracker.style.transform = `translateX(-${100 * number}vw)`
            this.current = number

        },
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
            this.$cookie.set("slide_number", this.current)
            setTimeout(() => {
                this.$refs.sliderTracker.style.transition = `${this.trasitionTime}ms`
            }, 0)
        }
    },
    mounted() {
        this.createSlides()
        this.showSlide(this.$cookie.get("slide_number" || this.start))
        this.$refs.sliderTracker.addEventListener("transitionend", () => this.onTransitionEnd(), false);
        EventBus.$on("show-previous-slide", () => this.showPreviousSlide())
        EventBus.$on("show-next-slide", () => this.showNextSlide())
    }
}
</script>
