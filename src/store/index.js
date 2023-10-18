import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemsincart: [],
    token: localStorage.getItem('token')
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
