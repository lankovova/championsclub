<template>
    <div class="panel__panel-top">
        <div class="panel-bottom__container">
            <ExitButton/>
            <Notifier/>
        </div>
    </div>
</template>

<script>
import ExitButton from "../buttons/Exit"
import Notifier from "./Notifier/Notifier"

export default {
    components: {
        ExitButton,
        Notifier
    }
}
</script>

