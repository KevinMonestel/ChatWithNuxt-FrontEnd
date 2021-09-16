<template>
  <div class="border p-5 bg-white w-full md:w-96 rounded">
    <form @submit.prevent="SetUserNameAndRegisterToHub" autocomplete="off">
      <div class="twe-form-imput">
        <label for="formUserModel.username">Enter your username</label>
      </div>
      <div class="twe-form-input">
        <input type="text" v-model="formUserModel.username" id="formUserModel.username" class="twe-input" placeholder="Username...">
      </div>
      <div class="twe-form-input text-right">
        <input type="submit" value="Join to hub" class="twe-button">
      </div>
    </form>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { mapState } from 'vuex';
  import FormUser from '../models/form-user';

  export default Vue.extend({
    data(){
      return{
        formUserModel: {} as FormUser
      }
    },

    methods: {
      SetUserNameAndRegisterToHub(){
       this.$store.commit('user/setUserName', this.formUserModel.username);
       
       window.location.href = "/chat";
      }
    },

    computed: {
      ...mapState('user', ['username'])
    }
  })
</script>

<style scoped>

</style>