<template>
  <footer v-if="$store.state.index.statusError">
    <div class="main">
		<el-row>
		  <el-col :lg="6" :sm="12" :xs="24">
		  	<div class="grid-content">
		  		<div>One Euston Square</div>
		  		<div>40 Melton Street</div>
		  		<div>London</div>
		  		<div>NW1 2FD</div>
		  	</div>
		  </el-col>
		  <el-col :lg="6" :sm="12" :xs="24">
		  	<div class="grid-content">
		  		<div>7c Frederick Street</div>
				<div>Victoria Works</div>
				<div>Birmingham</div>
				<div>B1 3HE</div>
		  	</div>
		  </el-col>
		  <el-col :lg="6" :sm="12" :xs="24">
		  	<div class="grid-content">
		  		<div>+44 (0) 121 288 1482</div>
				<div><router-link to="home">mail@weareadaptable.com</router-link></div>
				<div></div>
				<div><router-link to="home">Careers</router-link></div>
		  	</div>
		  </el-col>
		  <el-col :lg="6" :sm="12" :xs="24">
		  	<div class="grid-content">
		  		<div class="icon">
		  			<router-link to="home"><i class="el-icon-star-off"></i></router-link>
					<router-link to="home"><i class="el-icon-menu"></i></router-link></router-link>
					<router-link to="home"><i class="el-icon-share"></i></router-link>
					<router-link to="home"><i class="el-icon-document"></i></router-link>
				</div>
				<div></div>
				<div><router-link to="home">Quarterly Insight.</router-link></div>
				<div><router-link to="home">Discovery</router-link></div>
		  	</div>
		  </el-col>
		</el-row>
		<div class="footer-text">Copyright adaptable 2016 | All Rights Reserved</div>
    </div>
  </footer>
</template>
<script>
  export default {
    mounted () {
      this.$store.commit('getFooterHeight', this.$el.clientHeight)
      const that = this
      window.addEventListener('resize', function () {
        that.$store.commit('getFooterHeight', that.$el.clientHeight)
      })
    }
  }
</script>
<style scoped>
	a{
		color: white;
	}
	a:hover{
	  	color: #bbb;
	}
	footer{
		padding: 64px 0;
		background-color: #212225;
	}
	.main{
		width: 90%;
		margin: 0 auto;
	}
	.grid-content {
	    color: white;
	    margin: 10px 0;
	    padding: 2em 0;

	}
	.grid-content div{
		text-align: left;
	    line-height: 1.5em;
	    font-size: 1.25em;
	    min-height: 2em;
	}
	.footer-text{
		color: #bbb;
		text-align: left;
		font-size: 0.8em;
	}
	.icon{
		display: flex;
		justify-content: space-between;
		max-width: 170px;
	}
</style>
