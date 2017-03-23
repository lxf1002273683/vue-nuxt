<template>
  <div class="main">
    <el-row>
        <el-col :lg="24" :sm="24" :xs="24" v-for="item in lists">
          <div class="btn">
              <!-- 使用懒加载 -->
              <h4>{{item.title}}</h4>
              <span>{{item.text}}</span>
          </div>
        </el-col>
      </el-row>
  </div>
</template>
<script>
  export default {
    data ({params}) {
      console.log(params)
      return {
        id: params.id,
        name: params.name,
        lists: []
      }
    },
    mounted () {
      const that = this
      this.postData('http://g.cn', {
        'id': this.id,
        'name': this.name
      })
      .then((res) => {
        this.$notify({
          title: '成功',
          message: '当前文章id = ' + that.id + 'name = ' + that.name,
          type: 'success'
        })
        that.lists = res.data.list
      })
    }
  }
</script>
