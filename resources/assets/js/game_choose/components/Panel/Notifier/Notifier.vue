<template>
    <div class="notifier">
        <div class="jackpot-bonus">
            <div class="jackpot-bonus__grid"></div>
            <div class="jackpot">jackpot: {{ jackpot.toFixed(2) }}</div>
            <div class="bonus">bonus: {{ bonus.toFixed(2) }}</div>
        </div>

        <div class="notifier__field">
            {{ $t("select_game") }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jackpot: 7352,
            bonus: 6923
        }
    },
    mounted() {
        setInterval(() => {
            this.jackpot += 0.04
            this.bonus += 0.03
        }, 100)
    }
}
</script>
