<template>
	<div class="main">
		<ul class="navigation__list">
	      <li><router-link to="/case-studies">All</router-link></li>
	      <li><router-link to="/case-studies/brand">Brand</router-link></li>
	      <li><router-link to="/case-studies/identity">Identity</router-link></li>
	      <li><router-link to="/case-studies/digitale">Digitale</router-link></li>
	      <li><router-link to="/case-studies/commerce">Commerce</router-link></li>
	      <li><router-link to="/case-studies/packaging">Packaging</router-link></li>
	      <li class="archive"><router-link to="/case-studies/archive" class="active">Archive</router-link></li>
	    </ul>
	    <div v-for="item in lists">
	    	<img :src="item.titleImg">
			<div class=" marginTop clearFloat">
				<img v-for="list in item.imgList" @click="photograph(list)" v-lazy.container="list">
			</div>
	    </div>
	    <div class="b-extraLeads">
	    	<div class="content">
	    		<span> Need Help With A Project?</span>
	    		<div class="btn">
	    			<router-link to="/case-studies/packaging">Let's Talk</router-link>
	    		</div>
	    	</div>
	    </div>
		<div class="bg" v-show="show" @click="photograph">
			<img :src="bg_imgUrl">
		</div>
	</div>
</template>
<script>
  export default {
    data () {
      return {
        lists: {},
        show: false,
        bg_imgUrl: ''
      }
    },
    methods: {
      photograph (url) {
        this.show = !this.show
        if (this.show) {
          this.bg_imgUrl = url
        }
      }
    },
    mounted () {
      this.$store.commit('increment', 'case-studies')
      const that = this
      this.getData('../archive.json')
      .then((res) => {
        that.lists = res.data.imgs
      })
    }
  }
</script>
<style scoped lang="less">
	.b-extraLeads{
		width: 100%;
		height: 433px;
		background-image: url("../../assets/img/a_studio_cta.jpg");
   		background-size: cover;
    	background-position: center;
    	overflow: hidden;
    	text-align: center;
    	.content{
			position: relative;
			top: 50%;
			transform: translateY(-50%);
			span{
				display: block;
				color: white;
    			font-size: 3em;
    			width: 100%;
				text-align: center;
			}
			.btn{
				margin: 25px auto;
				&:hover{
					transform:translateY(-10px);
				}
			}
    	}
	}
	.marginTop{
		margin-top: 20px;
	}
	.clearFloat{
		img{
			width: 49.5%;
			cursor: pointer;
			margin-bottom: 20px;
		}
		img:nth-child(2n+1){
			float: left
		}
		img:nth-child(2n){
			float: right
		}
	}
	.bg{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: rgba(0,0,0,0.7);
		z-index: 1000;
		img{
			transform: translateY(-50%) scale(0.7);
			position: absolute;
			top: 50%;
		}
	}
	.main{
		padding-top: 6em;
		position: relative;
	}
	img{
		width: 100%;
	}
	.navigation__list{
		width: 90%;
		margin: 45px auto 15px;
		max-width: 1500px;
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
</style>
