<template>
  <div class="twe-card w-full md:w-96">
    <form @submit.prevent="SetUserNameAndRegisterToHub" autocomplete="off">
      <div class="twe-form-control">
        <label for="formUserModel.username">Enter your username</label>
      </div>
      <div class="twe-form-control">
        <input type="text" v-model="formUserModel.username" id="formUserModel.username" class="twe-input" placeholder="Username..." required>
      </div>
      <div class="twe-form-control text-right">
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
      async SetUserNameAndRegisterToHub(){
        let userValid:boolean = false;

        var apiResponse = await fetch(`${this.$config.publicConfig.baseURL}user/validate?username=${this.formUserModel.username}`);
        var json = await apiResponse.json();

        userValid = json;

        if(!userValid) {
          alert('Invalid user');
          return;
        }

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