import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import Navbar from "@/components/Navbar.vue"

Vue.config.productionTip = false
Vue.component('Navbar', Navbar)
Vue.use(Buefy)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
