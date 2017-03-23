import Vue from 'vue'
import axios from 'axios'
var MyPlugin = {}
MyPlugin.install = function (Vue, options) {
  Vue.mixin({
    methods: {
      getData (url) {
        return axios.get(url)
      },
      postData (url, obj) {
        return axios.post(url, obj)
      },
      scroll (callback) {
        window.addEventListener('scroll', callback)
      }
    }
  })
}

Vue.use(MyPlugin)
