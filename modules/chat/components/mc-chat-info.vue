<template>
  <div>
    {{msg}}
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    props:{
      msg:{
        type: String
      }
    }
  })
</script>

<style scoped>

</style>