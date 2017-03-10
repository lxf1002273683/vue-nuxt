<template>
   <!-- 想子组件传参数 请求地址  active -->
  <list url="list1.json" isActive="identity" caseStudies="case-studies" />
</template>
<script>
  import List from '~components/caseComponents/lists.vue'
  export default {
    components: {
      'list': List
    }
  }
</script>
