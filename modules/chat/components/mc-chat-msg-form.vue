<template>
  <div>
    <form @submit.prevent="sendMsg">
      <div class="twe-form-control relative">
        <textarea
          wrap="soft"
          class="twe-input resize-none"
          cols="1"
          placeholder="New message..."
          v-model="msg"
        />

        <emoji-picker @emoji="insert" :search="search">
          <div
            class="emoji-invoker absolute p-2 cursor-pointer outline-none"
            slot="emoji-invoker"
            slot-scope="{ events: { click: clickEvent } }"
            @click.stop="clickEvent"
          >
            <button type="button" class="focus:outline-none h-6 w-6 focus:shadow-outline rounded-full">
               <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current text-gray-600">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
          </svg>
            </button>
          </div>
          <div slot="emoji-picker" slot-scope="{ emojis, insert }">
            <div class="absolute z-10 border w-80 max-h-56 overflow-scroll p-4 rounded bg-white shadow -top-2/3">
              <div>
                <input type="text" v-model="search" class="w-full border focus:outline-none"/>
              </div>
              <div>
                <div v-for="(emojiGroup, category) in emojis" :key="category">
                  <h5 class="my-1">{{ category }}</h5>
                  <div>
                    <span
                      v-for="(emoji, emojiName) in emojiGroup"
                      :key="emojiName"
                      @click="insert(emoji)"
                      :title="emojiName"
                      >{{ emoji }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </emoji-picker>
      </div>

      <div class="twe-form-control text-right">
        <input type="submit" value="Send message" class="twe-button" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import EmojiPicker from "vue-emoji-picker";

export default Vue.extend({
  data() {
    return {
      msg: "",
      search: "",
    };
  },

  components: {
    EmojiPicker,
  },

  methods: {
    sendMsg() {
      if(this.msg == '') return;

      this.$emit("sendMsg", this.msg);
      this.msg = '';
    },

    insert(emoji: string) {
      this.msg += emoji;
    },
  },
});
</script>

<style scoped>
</style>