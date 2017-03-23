import Vue from 'vue'
import Mock from 'mockjs'

var Random = Mock.Random
Random.extend({
  constellation: function (date) {
    var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
    return this.pick(constellations)
  },
  isd: function (date) {
    return Random.id()
  },
  list: function (date) {
    var arr = []
    for (var i = 0; i < 10; i++) {
      var obj = {}
      obj.url = Random.dataImage('200x100', 'Hello Mock.js!')
      obj.title = Random.title(3, 5)
      obj.text = Random.paragraph(1, 3)
      obj.id = i
      obj.name = Random.name(true)
      arr.push(obj)
    }
    return arr
  }
})
// 子菜单数据
Mock.mock('http://g.cn', function (options) {
  var o = {
    'list': '@LIST',
    'page': 1
  }
  if (options.type === 'POST') {
    var obj = JSON.parse(options.body)
    o.page = obj.id
  }
  return Mock.mock(o)
})

Vue.use(Mock)
