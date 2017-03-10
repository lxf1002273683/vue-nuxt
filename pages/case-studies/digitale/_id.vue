<template>
  <div class="main">
    asdsad
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data ({params}) {
      return axios.get(`../${params.id}.json`)
    .then((res) => {
      console.log(res)
    })
    }
  }
</script>
