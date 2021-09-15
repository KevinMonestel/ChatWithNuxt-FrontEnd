<template>
<div>
  <div class="text-right">
    <button @click="disconnectUserToTheHub">
      <img src="https://icon-library.com/images/icon-cross/icon-cross-2.jpg" alt="" class="w-58 h-5">
    </button>
  </div>
  <div class="w-96 bg-white border p-5 rouded">
    <slot></slot>
  </div>
</div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    methods:{
      disconnectUserToTheHub(){
        this.$store.commit('user/deleteUserName');
        this.$router.push('/user')
      }
    }
  })
</script>

<style scoped>

</style>