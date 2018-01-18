<template>
    <div class="choose__container choose__container--lang">
        <div class="choose__header">
            {{ $t("lang_choose_header") }}
        </div>
        <div v-for="(lang, key) in langs"
            :ref="lang"
            :key="key"
            @click="choose(lang, $event)"
            :class="['lang ' + 'lang-' + lang ]"
        ></div>
    </div>
</template>

<script>
import EventBus from "../../event-bus.js"

export default {
    data() {
        return {
            langs: [
                "en", "ua", "ru"
            ],
            shown: false
        }
    },
    methods: {
        choose(lang, $event) {
            for (const lang of this.langs) {
                this.$refs[lang][0].classList.remove("lang-active")
            }
            
            $event.currentTarget.classList.add("lang-active")
            this.$i18n.locale = lang
            EventBus.$emit("lang-choose", lang)
            this.hide()
        },
        show() {
            EventBus.$emit("show-lang-choose")
            this.shown = true
            this.$el.style.transform = `translateY(-${this.$el.offsetHeight}px)`
        },
        hide() {
            EventBus.$emit("hide-lang-choose")
            this.shown = false
            this.$el.style.transform = `translateY(20px)`
        },
        toggle() {
            if (this.shown) {
                this.hide()
            } else { this.show() }
        }
    },
    mounted() {
        EventBus.$on("toggle-lang-choose", () => this.toggle())
        this.$refs[this.$i18n.locale][0].classList.add("lang-active")
    }
}
</script>
