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

export default {
    name: "app",
    components: {
        Panel, Slider
    },
}
</script>
