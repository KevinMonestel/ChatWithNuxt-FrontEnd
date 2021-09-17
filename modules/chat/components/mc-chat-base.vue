<template>
<div class="flex justify-center flex-col w-full md:w-5/12">
  <div class="text-right">
    <button @click="disconnectUserToTheHub">
      <img src="https://icons-for-free.com/iconfiles/png/512/logout-1324760598547500271.png" alt="" class="w-58 h-5" title="Exit">
    </button>
  </div>
  <div class="twe-card twe-chat-content" id="chat-content">
  </div>
  <mc-chat-msg-form v-on:sendMsg="SendMsgToTheHub"/>
</div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    methods:{
      disconnectUserToTheHub(){
        this.$store.commit('user/deleteUserName');
        this.$emit('DisconnectUserToTheHub')
        this.$router.push('/user')
      },

      SendMsgToTheHub(msg:string){
        this.$emit("SendMsgToTheHub", msg);
      }
    }
  })
</script>

<style scoped>

</style>