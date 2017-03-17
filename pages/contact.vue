<template>
  <div class="main">
    <div class="contactModule">
      <div class="contactModule-content">
        <el-row>
          <el-col :lg="11" :sm="24" :xs="24">
            <div class="column">
              <h4>New Business</h4>
              <router-link to="#">dan@weareadaptable.com</router-link>
            </div>
            <div class="column">
              <h4>General Enquires</h4>
              <router-link to="#">mail@weareadaptable.com</router-link>
            </div>
            <div class="column">
              <h4>Call Us</h4>
              <router-link to="#">+44 (0) 121 288 1482</router-link>
            </div>
          </el-col>
          <el-col :lg="13" :sm="24" :xs="24">
            <form @submit="handleSubmit($event)" method="post" action="http://www.baidu.com">
              <div class="form">
                <div class="item">
                  <span v-show="dataList[0].status"></span>
                  <input @input="handleFocus($event)" type="text" placeholder="Your Name*" v-model="dataList[0].text">
                  <label>Your Name*</label>
                </div>
                <div class="item">
                  <span v-show="dataList[1].status"></span>
                  <input @input="handleFocus($event)" type="text" placeholder="Company Name*" v-model="dataList[1].text">
                  <label>Company Name<span>*</span></label>
                </div>
                <div class="item">
                  <span v-show="dataList[2].status"></span>
                  <input @input="handleFocus($event)" type="Email" placeholder="Email Address*" v-model="dataList[2].text">
                  <label>Email*</label>
                </div>
                <div class="item">
                  <span v-show="dataList[3].status"></span>
                  <input @input="handleFocus($event)" type="text" placeholder="Contact No.*" v-model="dataList[3].text">
                  <label>Contact No.*</label>
                </div>
                <div class="item">
                  <span v-show="dataList[4].status"></span>
                  <input @input="handleFocus($event)" type="text" placeholder="Project Budget*" v-model="dataList[4].text">
                  <label>Project Budget*</label>
                </div>
                <div class="item">
                  <span v-show="dataList[5].status"></span>
                  <input @input="handleFocus($event)" type="text" placeholder="How Did You Find Us?*" v-model="dataList[5].text">
                  <label>How Did You Find Us?*</label>
                </div>
                <div class="item">
                  <span v-show="dataList[6].status"></span>
                  <input @input="handleFocus($event)" type="text" placeholder="A few words about your project...*" v-model="dataList[6].text">
                  <label>A few words about your project...*</label>
                </div>
              </div>
              <input class="btn" type="submit" value="Submit" name="form">
            </form>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="text-overview">
      <div class="text-overview-context">
        <div class="text-overview-column clearFloat">
          <img src="http://weareadaptable.com/app/uploads/2014/09/a_contact_hero-1.jpg">
          <div class="inner-pad">
            <h4>Careers</h4>
            <span>
              adaptable is an open and flexible working environment where everyone is treated equally, striving to break boundaries with all our work.
            </span>
            <router-link class="btn" to="#">Learn More</router-link>
          </div>
        </div>
        <div class="text-overview-wrapper">
          <div>
            <h4>Internships</h4>
            <p>We occasionally offer students & grads internships. Make yourself known & we’ll be in touch if we have availability.</p>
          </div>
          <div>
            <h4>Quarterly Insight</h4>
            <p>Every quarter we send out our latest industry insights and studio news. Sign up <router-link class="here" to="#">here</router-link> to receive your copy.</p>
          </div>
          <div>
            <h4>Social</h4>
            <p><router-link to="#">Twitter</router-link> / <router-link to="#">Instagram</router-link> / <router-link to="#">Linkedin</router-link></p>
          </div>
        </div>
      </div>
    </div>
    <div class="addrss-block">
      <div>
        <p>London</p>
        <span>adaptable.</span>
        <span>One Euston Square</span>
        <span>40 Melton Street</span>
        <span>London</span>
        <span>NW1 2FD</span>
      </div>
      <div>
        <p>Birmingham</p>
        <span>adaptable.</span>
        <span>7c Frederick Street</span>
        <span>Victoria Works</span>
        <span>Birmingham</span>
        <span>B1 3HE</span>
      </div>
    </div>
  </div>
</template>
<!-- 使用了$event直接获取元素
foreach可遍历数组
使用for in可遍历对象 -->
<script>
  export default {
    data (context) {
      return {
        name: context.route.name,
        dataList: [
          {
            text: '',
            status: false
          },
          {
            text: '',
            status: false
          },
          {
            text: '',
            status: false
          },
          {
            text: '',
            status: false
          },
          {
            text: '',
            status: false
          },
          {
            text: '',
            status: false
          },
          {
            text: '',
            status: false
          }
        ]
      }
    },
    watch: {
      dataList: {
        handler: function (val, oldVal) {
          console.log(val)
          console.log(oldVal)
        },
        deep: true
      }
    },
    methods: {
      handleFocus (event) {
        let dom = event.target
        if (dom.value) {
          dom.nextSibling.style.opacity = 1
        } else {
          dom.nextSibling.style.opacity = 0
        }
      },
      handleSubmit (event) {
        for (var key in this.dataList) {
          if (!this.dataList[key].text) {
            this.dataList[key].status = true
            event.preventDefault()
          } else {
            this.dataList[key].status = false
          }
        }
      }
    },
    mounted () {
      this.$store.commit('increment', this.name)
    }
  }
</script>
<style lang="less" scoped>
  .main{
    background-color: #eee;
  }
  .contactModule{
    padding: 170px 0;
  }
  .contactModule-content{
    width: 90%;
    max-width: 1500px;
    margin: 0 auto;
  }
  .column{
    margin-top: 40px;
    &:nth-child(1){
      margin-top: 0;
    }
    h4{
      font-size: 1.25em;
      color: #BBBBBB;
      line-height: 1.4em;
      font-weight: 100;
    }
    a{
      line-height: 1.4em;
      font-size: 1.8em;
      &:after{
        content: "";
        width: 0;
        height: 2px;
        background: #212225;
        display: block;
        margin-top: 3px;
        transition: 0.4s;
      }
      &:hover::after{
        width: 90%;
      }
    }
  }
  .form{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .item{
      width: 48.8%;
      position: relative;
      span{
        display:block;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 5px;
        height: 62px;
        background-color: red;
        transition: all 0.3;
      }
      label{
        position: absolute;
        right: 10px;
        top: 20%;
        color: #666;
        opacity: 0;
        transition: all 0.3s;
        font-size: 12px;
        font-weight: 700;
        color: #aaa;
      }
      input{
        outline: none;
        border: none;
        width: 92%;
        margin-bottom: 15px;
        background-color: white;
        border: 1px solid white;
        height: 60px;
        font-size: 1.2em;
        padding: 0 4%;
        &:focus{
          border-color: #aaa;
        }
      }
      &:last-child{
        width: 100%;
        input{
          outline: none;
          border: none;
          width: 96%;
          margin-bottom: 15px;
          background-color: white;
          border: 1px solid white;
          height: 60px;
          font-size: 1.2em;
          padding: 0 2%;
          &:focus{
            border-color: #aaa;
          }
        }
      }
    }
  }
  form .btn{
    float: right;
    outline: none;
    border: none;
    line-height: 1em;
    background-color: black;
    color: white;
    &:hover{
      transform: translateY(-15px);
    }
  }
  .text-overview{
    padding: 80px 0;
    background-color: white;
    .text-overview-context{
      width: 90%;
      max-width: 1500px;
      margin: 0 auto;
      
    }
    .text-overview-column{
      img{
        width: 48%;
        float: left;
      }
      .inner-pad{
        float: right;
        width: 48%;
        h4{
          font-size: 1.25em;
          color: #BBB;
          font-weight: 100;
        }
        span{
          line-height: 40px;
          font-size: 1.8em;
          margin: 10px 0 35px;
          display: block;
        }
        .btn{
          color: white;
          background-color: black;
          &:hover{
            transform:translateY(-15px);
          }
        }
      }
    }
    .text-overview-wrapper{
      display: flex;
      justify-content: space-between;
      margin-top: 80px;
      div{
        width: 24%;
        h4{
          font-size: 1.25em;
          color: #BBB;
          font-weight: 100;
        }
        p{
          font-size: 1.3em;
          margin: 10px 0 35px;
          display: block;
          margin: 15px 0;
          line-height: 1.5em;
        }
        &:nth-child(2) a{
          text-decoration: underline;
        }
        &:last-child{
          a{
            font-size: 1.2em;
          }
          p{
            color: #BBB;
          }
        }
        a{
          transition: all 0.3s;
        }
        a:hover{
          color: #BBB;
        }
      }
    }
  }
  .addrss-block{
    display: flex;
    justify-content: center;
    height: 550px;
    div{
      width: 50%;
      height: 100%;
      color: white;
      padding-left: 6%;
      p{
        margin-top: 16%; 
        font-size: 1.2em;
      }
      span{
        font-size: 1.8em;
        display: block;
        line-height: 1.5em;
        &:nth-child(2){
          margin-top: 30px;
        }
      }
    }
    div:nth-child(1){
      background: url(http://weareadaptable.com/app/uploads/2014/09/a_contact_ldn-1.jpg);
      background-size: cover;
      background-position: center;
    }
    div:nth-child(2){
      background: url(http://weareadaptable.com/app/uploads/2014/09/a_contact_bhm-1.jpg);
      background-position: center;
      background-size: cover;
    }
  }
</style>
