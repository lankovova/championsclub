<template>
    <div class="app">
        <GameChoosePage v-if="authed" />
        <LoginChampionPage v-else />
        
    </div>
</template>

<script>
import GameChoosePage from "./pages/GameChoose"
import LoginChampionPage from "./pages/LoginChampion"
import EventBus from "./event-bus.js"

export default {
    data() {
        return {
            authed: false
        }
    },
    components: {
        GameChoosePage, LoginChampionPage
    },
    mounted() {
        EventBus.$on("authed", () => this.authed = true)
    }
}
</script>
