import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMask from 'v-mask'
import { Server, Model } from 'miragejs'

Vue.config.productionTip = false
Vue.use(VueMask);

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
