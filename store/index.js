import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    index: {
      state: {
        page: 'index',
        statusError: true,
        footerHeight: 0
      },
      mutations: {
        increment (state, page) {
          state.page = page
        },
        error (state, statusError) {
          state.statusError = statusError
        },
        getFooterHeight (state, footerHeight) {
          state.footerHeight = footerHeight
        }
      }
    }
  }
})

export default store
