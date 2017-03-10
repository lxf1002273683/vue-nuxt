<template>
  <div class="main">
    <ul class="navigation__list">
      <li><router-link to="/case-studies">All</router-link></li>
      <li><router-link to="/caseStudies">Brand</router-link></li>
      <li><router-link to="/caseStudies">Identity</router-link></li>
      <li><router-link to="/caseStudies">Digitale</router-link></li>
      <li><router-link to="/caseStudies">Commerce</router-link></li>
      <li><router-link to="/caseStudies">Packaging</router-link></li>
      <li class="archive"><router-link to="/caseStudies">Archive</router-link></li>
    </ul>
  </div>
</template>
<script>
  export default {
    data (context) {
      return {
        name: context.route.name,
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
        // console.log(this.$refs.img[0].clientHeight)
        this.height = this.$refs.img[0].clientHeight + 'px'
      }
    },
    mounted () {
      // this.$store.commit('increment', this.name)
      // window.addEventListener('resize', this.resize)
      // var that = this
      // setTimeout(function () {
      //   that.height = that.$refs.img[0].clientHeight - 9 + 'px'
      // }, 300)
    }
  }
</script>
<style lang="less" scoped>
  .main{
    padding-top: 6em;
    width: 90%;
    max-width: 1500px;
    margin: 0 auto;
  }
  .navigation__list{
    margin: 45px 0 15px;
    padding: 30px;
    li{
      display: inline-block;
      margin-right: 65px;
      font-size: 1.25em;
      a{
        color: #bbb;
      }
    }
    .archive{
      float: right;
      margin-right: 100px;
      text-decoration: underline;
    }
  }
</style>

