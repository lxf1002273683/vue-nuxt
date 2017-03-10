import Vue from 'vue'
import axios from 'axios'
var MyPlugin = {}
MyPlugin.install = function (Vue, options) {
  Vue.mixin({
    methods: {
      getData (url) {
        return axios.get(url)
      }
    }
  })
}

Vue.use(MyPlugin)
