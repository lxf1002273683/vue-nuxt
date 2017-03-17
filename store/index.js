import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    page: 'index',
    statusError: true
  },
  getters: {
    cons: () => {
      return 2
    }
  },
  mutations: {
    increment (state, page) {
      state.page = page
    },
    error (state, statusError) {
      state.statusError = statusError
    }
  }
})

export default store
