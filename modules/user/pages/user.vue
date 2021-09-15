<template>
  <div class="twe-container">
    <mc-user-logo-register/>
    <mc-user-form/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { mapState } from 'vuex'
import mcUserLogoRegister from '../components/mc-user-logo-register.vue'

  export default Vue.extend({
  components: { mcUserLogoRegister },

  })
</script>

<style scoped>

</style>