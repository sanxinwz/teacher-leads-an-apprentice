import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'font-awesome/scss/font-awesome.scss'
// plugin
import './plugins/Element'
import './plugins/GlobalComps'

//api
import api from '@/api/plugins/api'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.prototype.$api = api
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

