<template>

    <div class="panel">
        <transition name="fade">
            <div ref="overlay" class="panel__overlay" v-if="overlay"></div>
        </transition>
        <HistoryPresenter/>
        <div class="panel-top__container">
            <DenominationChoose/>
            <LangChoose/>
        </div>
        <PanelTop/>
        <PanelBottom/>
    </div>

</template>

<script>
import EventBus from "../../event-bus.js"
import PanelTop from './PanelTop'
import PanelBottom from './PanelBottom'
import LangChoose from './LangChoose'
import DenominationChoose from './DenominationChoose'
import HistoryPresenter from './HistoryPresenter'

export default {
    components: {
        PanelTop, PanelBottom, LangChoose, DenominationChoose, HistoryPresenter
    },
    data() {
        return {
            overlay: false
        }
    },
    methods: {
        showOverlay() {
            this.overlay = true;
        },
        hideOverlay() {
            this.overlay = false;
        }
    },
    mounted() {
        EventBus.$on("show-lang-choose", () => this.showOverlay())
        EventBus.$on("hide-lang-choose", () => this.hideOverlay())
        EventBus.$on("show-denomination-choose", () => this.showOverlay())
        EventBus.$on("hide-denomination-choose", () => this.hideOverlay())
    },
    destroyed() {
        EventBus.$off("show-lang-choose", () => this.showOverlay())
        EventBus.$off("hide-lang-choose", () => this.hideOverlay())
        EventBus.$off("show-denomination-choose", () => this.showOverlay())
        EventBus.$off("hide-denomination-choose", () => this.hideOverlay())
    }


}
</script>
