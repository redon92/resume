import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import './registerServiceWorker'
import Home from './views/Home.vue'

Vue.config.productionTip = false;

new Vue({
  Home,
  render: h => h(App)
}).$mount('#app')
