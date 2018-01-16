<template>
    <div class="choose__container">
        <div class="choose__header">
            {{ $t("denomination_choose_header") }}
        </div>
        <div v-for="(denomination, key) in denominations"
            :ref="denomination"
            :key="key"
            @click="choose(denomination, $event)"
            class="denomination-choose__variant"
        >
            <div class="denomination-value">{{ parseFloat(denomination).toFixed(2) }}</div>
            <div class="kup">Kup</div>
        </div>
    </div>
</template>

<script>
import EventBus from "../../event-bus.js"

export default {
    data() {
        return {
            shown: false,
            denominations: [],
        }
    },
    methods: {
        choose(denomination, $event) {
            let denominations = this.$el.childNodes

            for (const denomination of denominations) {
                if (!denomination.hasOwnProperty("classList")) continue;
                denomination.classList.remove("denomination-choose__variant--active")
            }
            $event.currentTarget.classList.add("denomination-choose__variant--active")
            
            this.$cookie.set("denomination", denomination, 1)
            EventBus.$emit("pick-denomination-choose", denomination)
            this.hide()
        },
        show() {
            EventBus.$emit("show-denomination-choose")
            this.shown = true
            this.$el.style.transform = `translateY(-${this.$el.offsetHeight}px)`
        },
        hide() {
            EventBus.$emit("hide-denomination-choose")
            this.shown = false
            this.$el.style.transform = `translateY(20px)`
        },
        toggle() {
            if (this.shown) {
                this.hide()
            } else {
                this.show() 
            }
        },
        dataLoaded(data) {
            let denomination = this.$cookie.get("denomination") || data.denominations[0]
            this.denominations = data.denominations
            this.$nextTick(() => {
                this.$refs[denomination][0].classList.add("denomination-choose__variant--active")
            })
        },
    },
    mounted() {
        EventBus.$on("toggle-denomination-choose", () => this.toggle())
        EventBus.$on("player-data-loaded", data => this.dataLoaded(data))
    }
}
</script>
