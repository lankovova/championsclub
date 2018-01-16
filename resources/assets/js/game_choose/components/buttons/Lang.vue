<template>
    <div 
        @click="toggleDenomination" 
        class="button button--lang"
        @mousedown="buttonDowmn"
        @mouseup="buttonUp"
        @mouseleave="buttonUp"
    >
    
    </div>
</template>

<script>
import EventBus from "../../event-bus.js"
import {buttonEvents} from "../../mixins.js"

export default {
    methods: {
        toggleDenomination() {
            if (this.$el.classList.contains("button--disabled")) return;
            EventBus.$emit("toggle-lang-choose")
        },
        // Clear handlers
        showLangChooseHandler() {},
        hideLangChooseHandler() {}
    },
    mixins: [buttonEvents],
}
</script>
