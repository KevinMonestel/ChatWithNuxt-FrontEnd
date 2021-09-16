<template>
  <div class="twe-container">
    <mc-chat-base
      v-on:DisconnectUserToTheHub="DisconnectToTheHub"
      v-on:SendMsgToTheHub="SendMsgToTheHub"
    >
    </mc-chat-base>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import { HubConnectionBuilder, LogLevel } from "@aspnet/signalr";

export default Vue.extend({
  data() {
    return {
      validUser: true,
      connection: {} as any,
    };
  },

  methods: {
    validateUserRegistered() {
      if (!this.username || this.username == null || this.username == "")
        this.$router.push("/user");

      this.connectToTheHub();
    },

    connectToTheHub() {
      this.connection = new HubConnectionBuilder()
        .withUrl(
          `${this.$config.publicConfig.baseURL}chathub?username=${this.username}`
        )
        .configureLogging(LogLevel.Information)
        .build();

      this.connection.start();
    },

    DisconnectToTheHub() {
      this.connection.stop();
    },

    SendMsgToTheHub(msg: string) {
      this.connection.invoke("OnSendMsg", this.username, msg);
    },

    getDate() {
      let date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      let fullDate = `${day}/${month}/${year}.`;

      return fullDate;
    },
  },

  created() {
    this.validateUserRegistered();

    this.connection.on("UserConnected", (username: string) => {
      var info = document.createElement("p");
      info.classList.add("twe-chat-item");
      info.classList.add("twe-chat-info");
      info.innerHTML = `User <strong>${username}</strong> has connected to the hub...`;
      var chatContent = document.querySelector("#chat-content");
      if (chatContent) chatContent.appendChild(info);
    });

    this.connection.on("UserDisconnected", (username: string) => {
      var info = document.createElement("p");
      info.classList.add("twe-chat-item");
      info.classList.add("twe-chat-info");
      info.innerHTML = `User <strong>${username}</strong> has disconnected to the hub...`;
      var chatContent = document.querySelector("#chat-content");
      if (chatContent) chatContent.appendChild(info);
    });

    this.connection.on("RecieveMsg", (username: string, msg: string) => {
      var div = document.createElement('div');
      div.classList.add('flex')
  
      var info = document.createElement("p");
      div.appendChild(info);

      info.classList.add("twe-chat-item");
      info.classList.add("twe-chat-msg");

      if (this.username === username) div.classList.add("justify-end");
      if (this.username !== username) div.classList.add("justify-start");

      info.innerHTML = `<span class="twe-chat-emitor">${username} - ${this.getDate()}</span><br>${msg}`;
      var chatContent = document.querySelector("#chat-content");
      if (chatContent){
        chatContent.appendChild(div)
        chatContent.appendChild(document.createElement('div'))
        chatContent.scrollTop = chatContent.scrollHeight;

      }
    });
  },

  computed: {
    ...mapState("user", ["username"]),
  },
});
</script>

<style scoped>
</style>