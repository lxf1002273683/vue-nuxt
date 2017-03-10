<template>
   <!-- 向子组件传参数 请求地址  active -->
  <list url="list1.json" isActive="all" />
</template>
<script>
  import List from '~components/caseComponents/lists.vue'
  export default {
    components: {
      'list': List
    }
  }
</script>
