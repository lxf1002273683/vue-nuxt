<template>
  <div class="main">
    <el-carousel :height="height">
      <el-carousel-item v-for="item in items" :key = "item">
        <div class="bg"><!-- :style="{backgroundImage: 'url(' + item.url + ')'}" -->
          <img ref="img" :src="item.url">
          <div class="text">
            <h1>{{item.text}}</h1>
            <router-link class="btn" to="/">Our Studio</router-link>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="info-text">
      <el-row>
        <el-col :lg="12" :sm="18" :xs="22">
          <div class="referral-text">
            Specialising in eCommerce, we combine innovation with digital craftsmanship to help brands fulfill their potential.
          </div>
            <router-link class="btn" to="/">Our Studio</router-link>
        </el-col>
      </el-row>
    </div>
    <div class="grid">
      <el-row>
        <el-col :lg="11" :sm="11" :xs="24">
            <router-link class="btn" to="/">
              <img src="http://weareadaptable.com/app/uploads/2016/08/a_t_stone.jpg">
              <h4>Stone Group</h4>
              <span>A New Digital Presence for IT Industry Leaders</span>
            </router-link>
        </el-col>
        <el-col :lg="11" :sm="11" :xs="24">
            <router-link class="btn" to="/">
              <img src="http://weareadaptable.com/app/uploads/2016/08/a_t_intel.jpg">
              <h4>Intelligent Change</h4>
              <span>An Engaging eCommerce Hub For Intelligent Change</span>
            </router-link>
        </el-col>
      </el-row>
    </div>
    <div class="discoveryBanner">
      <div class="discoveryBanner__content">
        <h1>Discovery.</h1>
        <h1>Discovery.</h1>
        <span>
          Investigating and identifying drivers from across your business's people, process and technology that will lead to more successful outcomes.
        </span>
          <router-link class="btn" to="/">Learn More</router-link>
      </div>
    </div>
    <div class="section">
      <div class="list" v-for="item in list" :key = "item">
            <router-link class="btn" to="/">
              <img :src="item.url">
              <h4>{{item.time}}</h4>
              <span>{{item.text}}</span>
              <span class="read-more">Read More</span>
            </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data (context) {
      console.log(context)
      return {
        height: '0px',
        items: [
          {
            'url': 'http://weareadaptable.com/app/uploads/2016/08/a_home_monday.jpg',
            'text': 'Shopify eCommerce Revved Up For Growth'
          },
          {
            'url': 'http://weareadaptable.com/app/uploads/2016/10/a_home_pco7.jpg',
            'text': 'Beautifully Simple eCommerce For P&Co. England'
          },
          {
            'url': 'http://weareadaptable.com/app/uploads/2016/10/a_home_hero27.jpg',
            'text': 'A Disruptive Digital Studio Crafting Immersive User Experience.'
          },
          {
            'url': 'http://weareadaptable.com/app/uploads/2016/08/a_home_stone2.jpg',
            'text': 'A New Digital Presence for IT Industry Leaders Stone Group'
          },
          {
            'url': 'http://weareadaptable.com/app/uploads/2016/08/a_home_intel.jpg',
            'text': 'An Engaging eCommerce Hub For Intelligent Change'
          }
        ],
        list: [
          {
            'url': 'http://weareadaptable.com/app/uploads/2016/11/YZY_Hero-801x601.jpg',
            'time': '02 . 12 . 16 / Thoughts',
            'text': 'User Interface Improvements For A Rapid Purchasing Experience'
          },
          {
            'url': 'http://weareadaptable.com/app/uploads/2016/12/NXUIupdate-800x601.jpg',
            'time': '01 . 12 . 16 / Process',
            'text': 'UI snapshot ? Exploring approaches to the events page for National Express. See the design process on dribbble.'
          },
          {
            'url': 'http://weareadaptable.com/app/uploads/2016/11/ab_Loake_her2-801x601.jpg',
            'time': '17 . 11 . 16 / Thoughts',
            'text': 'Reimagining The 130 Year Old Master Shoemakers Loake'
          }
        ]
      }
    },
    methods: {
      resize (event) {
        this.height = this.$refs.img[0].clientHeight + 'px'
      }
    },
    mounted () {
      this.$store.commit('increment', this.$route.name)
      window.addEventListener('resize', this.resize)
      var that = this
      setTimeout(function () {
        that.height = that.$refs.img[0].clientHeight - 9 + 'px'
      }, 300)
    }
  }
</script>
<!-- store 中getters可以使用返回值 -->
<style lang="less" scoped>
  .bg{
    width: 100%;
    height: 100%;
    img{
      position: relative;
      width: 100%;
    }
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 750px;
    text-align: center;
    margin: 0;
  }
  .text{
    width: 80%;
    position: absolute;
    margin: 0 auto;
    top: 25%;
    overflow: hidden;
    z-index: 2;
    left: 10%;
    h1{
      font-size: 2.5em;
      line-height: 48px;
      color: white;
      width: 55%;
      margin: 0.75em 0;
    }
  }
  .btn{
    &:hover{
      transform: translateY(-10px);
    }
  }
  .grid,
  .info-text{
    padding: 4em;
    .el-row{
      width: 80%;
      margin: 0 auto;
      .referral-text{
        font-size: 2.5em;
        line-height: 50px;
        margin: 40px 0;
        font-weight: 400;
      }
    }
  }
  .section,
  .grid{
    .el-col:nth-child(2n){
      float: left;
    }
    .el-col:nth-child(2n+1){
      float: right;
    }
    .btn{
      margin: 0;
      padding: 0;
      box-shadow: none;
      transition: all 0.8s;
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
      color: #333;
    }
  }
  .discoveryBanner{
    width: 100%;
    height: 618px;
    position: relative;
    background-image: url("../assets/img/a_d_hero.jpg");
    background-position: center;
    .discoveryBanner__content{
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 95%;
      text-align: center;
      color: white;
      h1{
        font-size: 3.2em;
      }
      span{
        width: 440px;
        line-height: 28px;
        display: block;
        margin: 0 auto;
      }
    }
  }
  .section{
    display: flex;
    padding: 4em 0;
    width: 80%;
    margin: 0 10%;
    justify-content: space-between;
    .list{
      width: 30%;
    }
    h4{
      font-weight: 100;
      line-height: 3em;
    }
    .read-more{
      display: block;
      margin-top: 30px;
      text-decoration: underline;
    }
  }
</style>
