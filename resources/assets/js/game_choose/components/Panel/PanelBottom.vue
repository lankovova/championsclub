<template>
    <div class="panel__panel-bottom">
        <div class="panel-bottom__container">
            <DenominationButton/>
            <CashPresenter/>
            <HelpPanel/>
            <PreviousSlideButton/> 
            <NextSlideButton/>
        </div>
    </div>
</template>

<script>
import EventBus from "../../event-bus.js"
import DenominationButton from "../buttons/Denomination"
import PreviousSlideButton from "../buttons/PreviousSlide"
import NextSlideButton from "../buttons/NextSlide"
import CashPresenter from "./CashPresenter"
import HelpPanel from "./HelpPanel"

export default {
    mounted() {
        EventBus.$on("toggle-denomination", () => {
        })
    },
    components: {
        DenominationButton,
        PreviousSlideButton,
        NextSlideButton,
        CashPresenter,
        HelpPanel,
    }
}
</script>
