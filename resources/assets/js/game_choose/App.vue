<template>
    <div class="app">
        <Loading :shouldHide="hideLoading"/>
        <GameChoosePage/>
        <LoginChampionPage v-show="!authed"/>
        
    </div>
</template>

<script>
import Loading from "./components/Loading"
import GameChoosePage from "./pages/GameChoose"
import LoginChampionPage from "./pages/LoginChampion"
import EventBus from "./event-bus.js"
import {isPlayerAuthed, logout, playerInfo} from "./config.js"
import axios from "axios"

export default {
    data() {
        return {
            authed: false,
            hideLoading: false
        }
    },
    components: {
        GameChoosePage, LoginChampionPage, Loading
    },
    watch: {
        authed() {
            if (this.authed) {
                axios.post(playerInfo).then(res => {
                    let data = {}
                    data.cash = res.data.cash
                    data.denominations = res.data.denomination

                    EventBus.$emit("player-data-loaded", data)
                })
            }
        }
    },
    beforeCreate() {
        axios.get(isPlayerAuthed).then(res => {
            this.authed = res.data.authed
        })

        window.addEventListener("load", () => {
            this.hideLoading = true
        });
    },
    mounted() {
        EventBus.$on("authed", () => this.authed = true)

        EventBus.$on("logout", () => {
            axios.get(logout)
            this.authed = false
        })
    }
}
</script>
