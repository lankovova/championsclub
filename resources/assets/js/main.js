// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import VueI18n from "vue-i18n"
import VueCookie from "vue-cookie"

Vue.use(VueCookie);
Vue.use(VueI18n)
Vue.config.productionTip = false
import messages from "./translations/"

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: "en", // set locale
    messages, // set locale messages
})

/* eslint-disable no-new */
new Vue({
    el: "#app",
    template: `<div id="app"><App/></div>`,
    components: { App },
    i18n
})
