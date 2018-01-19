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
        hideLangChooseHandler() {},

        setLang(lang) {
            this.$el.style.backgroundImage = `url('public/img/lang_flags/mini/${lang}.png')`
        }
    },
    mixins: [buttonEvents],

    mounted() {
        EventBus.$on("lang-choose", (lang) => this.setLang(lang))
    }
}
</script>
