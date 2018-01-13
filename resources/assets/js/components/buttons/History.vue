<template>
    <div 
        @click="toggleDenomination" 
        class="button button--history"
        @mousedown="buttonDowmn"
        @mouseup="buttonUp"
        @mouseleave="buttonUp"
    >
        {{ $t('history') }}
    </div>
</template>

<script>
import EventBus from "../../event-bus.js"
import {buttonEvents} from "../../mixins.js"

export default {
    methods: {
        toggleDenomination() {
            if (this.$el.classList.contains("button--disabled")) return;
            EventBus.$emit("show-history")
        },
    },
    mixins: [buttonEvents],
}
</script>
