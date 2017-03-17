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
            <router-link :to="'/case-studies/digitale/'+item.id">
              <!-- 使用懒加载 -->
              <img v-lazy.container="item.url">
              <h4>{{item.title}}</h4>
              <span>{{item.text}}</span>
            </router-link>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<!-- 使用props进行组件通信 -->
<script>
  export default {
    data () {
      return {
        lists: {}
      }
    },
    props: ['url', 'isActive', 'caseStudies'],
    mounted () {
      const that = this
      this.$store.commit('increment', this.caseStudies)
      this.getData('../list.json')
      .then((res) => {
        that.lists = res.data.list
      })
    }
  }
</script>
<style lang="less" scoped>
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
    }
    h4{
      color: #eee;
    }
    span{
      font-size: 1.2em;
      line-height: 1.2em;
      min-height: 2.4em;
      color: #333;
      display: block;
    }
  }
</style>

