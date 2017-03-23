<template>
  <div class="main">
    <ul class="navigation__list">
      <li><router-link to="/case-studies" v-bind:class="[isActive == 'all' ? 'active' : '']" >All</router-link></li>
      <li><router-link to="/case-studies/brand" v-bind:class="[isActive == 'brand' ? 'active' : '']">Brand</router-link></li>
      <li><router-link to="/case-studies/identity" v-bind:class="[isActive == 'identity' ? 'active' : '']">Identity</router-link></li>
      <li><router-link to="/case-studies/digitale" v-bind:class="[isActive == 'digitale' ? 'active' : '']">Digitale</router-link></li>
      <li><router-link to="/case-studies/commerce" v-bind:class="[isActive == 'commerce' ? 'active' : '']">Commerce</router-link></li>
      <li><router-link to="/case-studies/packaging" v-bind:class="[isActive == 'packaging' ? 'active' : '']">Packaging</router-link></li>
      <li class="archive"><router-link to="/case-studies/archive" v-bind:class="[isActive == 'archive' ? 'active' : '']">Archive</router-link></li>
    </ul>
    <div class="grid">
    <el-row>
        <el-col :lg="11" :sm="11" :xs="24" v-for="item in lists">
          <div class="btn">
            <router-link :to="'/case-studies/digitale/'+item.id+'/'+item.name">
              <!-- 使用懒加载 -->
              <img v-lazy.container="item.url">
              <h4>{{item.title}}</h4>
              <span>{{item.text}}</span>
            </router-link>
          </div>
        </el-col>
      </el-row>
      
    </div>
    <div class="loading" v-bind:style="{opacity: loading}">
      <span></span>
    </div>
  </div>
</template>
<!-- 使用props进行组件通信 -->
<script>
  export default {
    data () {
      return {
        lists: {},
        loading: 0,
        time: '',
        pageNum: 0
      }
    },
    props: ['url', 'isActive', 'caseStudies'],
    methods: {
      callback (e) {
        const ele = e.target.scrollingElement
        const n = ele.scrollHeight - ele.clientHeight - ele.scrollTop
        const that = this
        clearTimeout(this.time)
        if (that.pageNum >= 3) {
          return
        }
        if (n <= this.$store.state.index.footerHeight) {
          this.loading = 1
          this.time = setTimeout(function () {
            that.getData('../list.json')
            .then((res) => {
              that.lists = that.lists.concat(res.data.list)
              that.loading = 0
              that.pageNum++
            })
          }, 500)
        }
      }
    },
    mounted () {
      const that = this
      this.$store.commit('increment', this.caseStudies)
      this.getData('http://g.cn')
      .then((res) => {
        that.lists = res.data.list
      })
      this.scroll(this.callback)
    }
  }
</script>
<style lang="less" scoped>
  .loading{
    transition: all 0.5s;
    padding-top: 30px;
    span{
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 50% 50%;
      background-color: black;
      line-height: 0;
      position: relative;
      margin: 0 auto;
      &:before{
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50% 50%;
        background-color: black;
        left: -200%;
      }
      &:after{
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50% 50%;
        background-color: black;
        right: -200%;
      }
    }
  }
  .main{
    padding: 6em 0;
    width: 90%;
    max-width: 1500px;
    margin: 0 auto;
  }
  .navigation__list{
    margin: 45px 0 15px;
    padding: 30px 0;
    li{
      display: inline-block;
      margin-right: 65px;
      font-size: 1.25em;
      a{
        color: #bbb;
        &:hover{
          color:#888;
        }
      }
      .active{
        color: #212225;
      }
      .active:hover{
        color: #212225;
      }
    }
    .archive{
      float: right;
      margin-right: 100px;
      text-decoration: underline;
    }
  }
  .grid{
    .el-col{
      margin-bottom: 45px;
    }
    .el-col:nth-child(2n){
      float: right;
    }
    .el-col:nth-child(2n+1){
      float: left;
    }
    .referral-text{
      font-size: 2.5em;
      line-height: 50px;
      margin: 40px 0;
      font-weight: 400;
    }
    .btn{
      margin: 0;
      padding: 0;
      box-shadow: none;
      transition: all 0.8s;
      overflow: hidden;
      &:hover{
        transform: translateY(-20px);
        opacity: 0.7;
      }
    }
    img{
      width: 100%;
      display: block;
    }
    h4{
      color: #eee;
    }
    span{
      font-size: 1.2em;
      line-height: 1.2em;
      height: 2.4em;
      min-height: 2.4em;
      color: #333;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>

