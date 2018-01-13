<template>
    <div class="help-panel">
        <LangButton/>
        <div class="button button--help button--disabled"></div>
        <HistoryButton/>
    </div>
</template>

<script>
import HistoryButton from "../buttons/History"
import LangButton from "../buttons/Lang"

export default {
    components: {
        HistoryButton,
        LangButton
    }
}
</script>
