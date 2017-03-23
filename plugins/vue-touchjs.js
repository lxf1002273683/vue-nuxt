import Vue from 'vue'
// 判断浏览器是否构建完成
if (process.BROWSER_BUILD) {
  var infiniteScroll = require('vue-touchjs')
  Vue.use(infiniteScroll)
}
