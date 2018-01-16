<template>
    <div 
        @click="toggleDenomination" 
        class="button button--denomination"
        @mousedown="buttonDowmn"
        @mouseup="buttonUp"
        @mouseleave="buttonUp"
    >
        <div class="text-1">1 credit=</div>
        <div class="text-2">{{ parseFloat(this.denomination).toFixed(2) }}</div>
        <div class="text-3">kup</div>
    </div>
</template>

<script>
import EventBus from "../../event-bus.js"
import {buttonEvents} from "../../mixins.js"

export default {
    data() {
        return {
            denomination: 0,
        }
    },
    methods: {
        toggleDenomination() {
            if (this.$el.classList.contains("button--disabled")) return;
            EventBus.$emit("toggle-denomination-choose")
        },
        changeDenomination(denomination) {
            this.denomination = denomination
        },
        dataLoaded(data) {
            this.denomination = this.$cookie.get("denomination") || data.denominations[0]
        },
        // Clear handlers
        showDenominationChooseHandler() {},
        showDenominationChooseHandler() {}
    },
    mixins: [buttonEvents],
    mounted() {
        EventBus.$on("pick-denomination-choose", 
            denomination => this.changeDenomination(denomination))
        EventBus.$on("player-data-loaded", data => this.dataLoaded(data))
    }
}
</script>
