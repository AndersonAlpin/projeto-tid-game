import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/global.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

const button = document.querySelector('button')
button.addEventListener('click', function(){
  const audio = document.querySelector('audio')
  audio.play()
})