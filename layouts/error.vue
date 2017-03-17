<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" />
    <h1 class="title">
      {{ error.statusCode }}
    </h1>
    <h2 class="info">
      {{ error.message }}
    </h2>
    <nuxt-link class="button" to="/" v-if="error.statusCode === 404">
      Homepage
    </nuxt-link>
  </section>
</template>
<!-- 使用状态管理控制header footer消失 -->
<script>
export default {
  props: ['error'],
  mounted () {
    this.$store.commit('error', false)
  }
}
</script>

<style scoped>
.container{
  margin-top: 10%;
  text-align: center;
}
.title
{
  margin-top: 15px;
  font-size: 5em;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
}
.button
{
  margin-top: 50px;
}
</style>
