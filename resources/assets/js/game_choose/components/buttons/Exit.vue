<template>
    <div 
        @click="exit" 
        class="button button--exit"
        @mousedown="buttonDowmn"
        @mouseup="buttonUp"
        @mouseleave="buttonUp"
    >
        {{ $t('exit') }}
    </div>
</template>

<script>
import EventBus from "../../event-bus.js"
import {buttonEvents} from "../../mixins.js"

export default {
    methods: {
        exit() {
            if (this.$el.classList.contains("button--disabled")) return;
            EventBus.$emit("exit")
        },
    },
    mixins: [buttonEvents],
}
</script>
