import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    page: 'index'
  },
  mutations: {
    increment (state, page) {
      state.page = page
    }
  }
})

export default store
