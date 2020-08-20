import Vue from 'vue'
import App from './app/App'
import './app/_common/registerServiceWorker'
import store from './app/_common/store'
import router from './app/_common/router/index'
import './ui/assets/styles/styles.scss'

Vue.config.ignoredElements = [/^ion-/]
Vue.config.performance = true
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
