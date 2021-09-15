<template>
  <div class="twe-container">
    <mc-chat-base>chat {{username}}</mc-chat-base>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { mapState } from 'vuex';
import mcChatBase from '../components/mc-chat-base.vue';

  export default Vue.extend({
  components: { mcChatBase },

    data(){
      return{
        validUser: true
      }
    },

    methods: {
      validateUserRegistered(){
        if(this.username == null || this.username == '') 
          this.$router.push('/user')
      }
    },

    created(){
      this.validateUserRegistered();
    },

    computed:{
      ...mapState('user', ['username'])
    }
  })
</script>

<style scoped>

</style>