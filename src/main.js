import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'
import Typewriter from 'vue-typewriter'
Vue.use(Typewriter)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
// axios.defaults.baseURL = 'https://tamara99.pythonanywhere.com'
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
