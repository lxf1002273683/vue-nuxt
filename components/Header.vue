<template>
  <transition name="fade">
  <header v-if="scrolled" v-bind:class="$store.state.page">
    <div class="main">
		<el-row>
		  <el-col :lg="4" :sm="4" :xs="4">
		  	<div class="grid-content title" >
		  		<router-link to="/">adaptable.</router-link>
		  	</div>
		  </el-col>
		  <el-col :offset="6" :lg="14" :sm="14">
		  	<div class="nav">
		  		<span><router-link to="/case-studies">Case Studies</router-link></span>
		  		<span><router-link to="/discovery">Discovery</router-link></span>
		  		<span><router-link to="/about">About</router-link></span>
		  		<span><router-link to="/journal">Journal</router-link></span>
		  		<span><router-link to="/contact">Contact</router-link></span>
		  	</div>
		  </el-col>
		</el-row>
    </div>
  </header>
  </transition>
</template>
<script>
  export default {
    data (context) {
      return {
        scrolled: true
      }
    },
    methods: {
      handleScroll (event) {
        if (event.wheelDelta > 0) {
          this.scrolled = true
        } else {
          this.scrolled = false
        }
      },
      resize (event) {
        // console.log(this.$el.clientWidth)
      }
    },
    mounted () {
      window.addEventListener('mousewheel', this.handleScroll)
      // window.addEventListener('resize', this.resize)
    }
  }
</script>
<style scoped lang="less">
	header{
		padding: 30px 0;
		position: fixed;
		z-index: 100;
		width: 100%;
	}
	.main{
		width: 90%;
		margin: 0 auto;
	}
	.title{
		font-size: 36px;
		font-weight: 700;
	}
	.grid-content div{
	    line-height: 1.5em;
	    font-size: 1.25em;
	    min-height: 2em;
	}
	.nav{
		height: 42px;
		line-height: 42px;
		font-size: 1.3em;
		display: flex;
		justify-content: space-between;
		span{
			&:after{
			    content: "";
			    display: block;
			    width: 0;
			    height: 2px;
			    background: #eee;
			    margin-top: 2px;
			    transition: all 0.3s ease-in-out;
			}
		}
		span:hover::after{
			width: 100%;
		}
	}
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s
	}
	.fade-enter, .fade-leave-active {
		opacity: 0
	}
	/*nav切换*/
	.discovery a,
	.index a{
		color: #eee;
	}
	.case-studies a{
		color: #212225;
	}
	.case-studies{
		background-color: white;
		.nav span:after{
			background: #212225;
		}
	}
</style>
