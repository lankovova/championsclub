<template>
   <div class="game-chooser--champion">
        <Slider/>
        <Panel/>
    </div>
</template>

<script>
import Panel from "../components/Panel/Panel"
import Slider from "../components/Slider"
import axios from "axios"
import EventBus from "../event-bus.js"
import {playerInfo} from "../config.js"

export default {
    name: "app",
    components: {
        Panel, Slider
    },
    mounted() {
        let data = {};
        axios.post(playerInfo).then(res => {
            data.cash = res.data.cash
            data.denominations = res.data.denomination
            EventBus.$emit("player-data-loaded", data)
        })
    }
}
</script>
