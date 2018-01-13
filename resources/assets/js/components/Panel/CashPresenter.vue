<template>
    <div class="cash-presenter">
        <div class="cash-presenter__field">
            <div class="text">{{ $t("credit") }}</div>
            <div class="box">
                <div class="box__points">{{ this.credit.points }}</div>
                <div class="box__kup">{{ parseFloat(this.credit.kup).toFixed(2) }} Kup</div>
            </div>
        </div>
        <div class="cash-presenter__field">
            <div class="text">{{ $t("insurance") }}</div>
            <div class="box">
                <div class="box__points">{{ this.insurance.points }}</div>
                <div class="box__kup">{{ parseFloat(this.insurance.kup).toFixed(2) }} Kup</div>
            </div>
        </div>
    </div>
</template>

<script>
import EventBus from "../../event-bus.js"

export default {
    data() {
        return {
            credit: {
                points: 0,
                kup: 0
            },
            insurance: {
                points: 0,
                kup: 0
            }
        }
    },
    methods: {
        denominationChanged(denomination) {
            this.credit.points = parseInt(this.credit.kup / denomination)
        },
        dataLoaded(data) {
            this.credit.kup = data.cash
            let denomination = this.$cookie.get("denomination") || data.denominations[0]

            this.denominationChanged(denomination)
        }
    },
    mounted() {
        EventBus.$on("pick-denomination-choose", 
            denomination => this.denominationChanged(denomination))
        EventBus.$on("player-data-loaded", data => this.dataLoaded(data))
    }
}
</script>
