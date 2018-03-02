import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import apolloProvider from './apollo-provider'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  router,
  store,
  provide: apolloProvider.provide(),
  render: h => h(App)
}).$mount('#app')
