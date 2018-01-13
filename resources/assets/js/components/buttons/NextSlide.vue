<template>
    <div 
        @click="showNextSlide" 
        class="button button--next-slide"
        @mousedown="buttonDowmn"
        @mouseup="buttonUp"
        @mouseleave="buttonUp"
    >
        {{ $t('next') }}
    </div>
</template>

<script>
import EventBus from "../../event-bus.js"
import {buttonEvents} from "../../mixins.js"

export default {
    methods: {
        showNextSlide() {
            if (this.$el.classList.contains("button--disabled")) return;
            EventBus.$emit("show-next-slide")
        },
    },
    mixins: [buttonEvents],

}
</script>
