<template>
  <list url="list1.json" isActive="brand" caseStudies="case-studies" />
</template>
<script>
  import List from '~components/caseComponents/lists.vue'
  export default {
    components: {
      'list': List
    }
  }
</script>

