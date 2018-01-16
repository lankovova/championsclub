<template>
    <div 
        @click="showPreviousSlide" 
        class="button button--previous-slide"
        @mousedown="buttonDowmn"
        @mouseup="buttonUp"
        @mouseleave="buttonUp"
    >
        {{ $t('back') }}
    </div>
</template>

<script>
import EventBus from "../../event-bus.js"
import {buttonEvents} from "../../mixins.js"

export default {
    methods: {
        showPreviousSlide() {
            if (this.$el.classList.contains("button--disabled")) return;
            EventBus.$emit("show-previous-slide")
        },
    },
    mixins: [buttonEvents]
}
</script>
