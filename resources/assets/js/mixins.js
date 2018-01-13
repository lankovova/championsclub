import EventBus from './event-bus'

export const buttonEvents = {
    methods: {
        buttonUp() {
            this.$el.classList.remove("button--down")
        },
        buttonDowmn() {
            this.$el.classList.add("button--down")
        },
        enableButton() {
            this.$el.classList.remove("button--disabled")
        },
        disableButton() {
            this.$el.classList.add("button--disabled")
        },
        slideTransitionEndHandler() {
            this.enableButton()
        },
        slideTransitionStartHandler() {
            this.disableButton()
        },
        showLangChooseHandler() {
            this.disableButton()
        },
        hideLangChooseHandler() {
            this.enableButton()
        },
        showDenominationChooseHandler() {
            this.disableButton()
        },
        hideDenominationChooseHandler() {
            this.enableButton()
        },
        showHistoryHandler() {
            this.disableButton()
        },
        hideHistoryHandler() {
            this.enableButton()
        }
    },
    created() {
        EventBus.$on("slide-transition-end", () => this.slideTransitionEndHandler())
        EventBus.$on("slide-transition-start", () => this.slideTransitionStartHandler())
        EventBus.$on("show-lang-choose", () => this.showLangChooseHandler())
        EventBus.$on("hide-lang-choose", () => this.hideLangChooseHandler())
        EventBus.$on("show-denomination-choose", () => this.showDenominationChooseHandler())
        EventBus.$on("hide-denomination-choose", () => this.hideDenominationChooseHandler())
        EventBus.$on("show-history", () => this.showHistoryHandler())
        EventBus.$on("hide-history", () => this.hideHistoryHandler())
    },
    destroyed() {
        EventBus.$off("slide-transition-end", () => this.slideTransitionEndHandler())
        EventBus.$off("slide-transition-start", () => this.slideTransitionStartHandler())
        EventBus.$off("show-lang-choose", () => this.showLangChooseHandler())
        EventBus.$off("hide-lang-choose", () => this.hideLangChooseHandler())
        EventBus.$off("show-denomination-choose", () => this.showDenominationChooseHandler())
        EventBus.$off("hide-denomination-choose", () => this.hideDenominationChooseHandler())
        EventBus.$off("show-history", () => this.showHistoryHandler())
        EventBus.$off("hide-history", () => this.hideHistoryHandler())
    }
}