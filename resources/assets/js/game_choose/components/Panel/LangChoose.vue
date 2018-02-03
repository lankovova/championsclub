<template>
    <div class="choose__container choose__container--lang">
        <div class="choose__header">
            {{ $t("selectLanguage") }}
        </div>
        <div class="choose__content">        
            <div v-for="(lang, key) in langs"
                :ref="lang"
                :key="key"
                @click="choose(lang, $event)"
                :class="['lang ' + 'lang-' + lang ]"
            ></div>
        </div>
    </div>
</template>

<script>
import EventBus from "../../event-bus.js"

export default {
    data() {
        return {
            langs: [
                "rs", "ua", "al", "nl", "gr", "ro", "pt", "pl",
                "hu", "de", "it", "fr", "cz", "hr", "es", "ru", "en"
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
            this.$cookie.set("lang", lang, 1)
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
        let lang = this.$cookie.get("lang") || this.$i18n.locale
        EventBus.$on("toggle-lang-choose", () => this.toggle())
        this.$refs[lang][0].click()
    }
}
</script>
