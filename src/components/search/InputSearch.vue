<template>

  <form class="searchInput"  id="form_tag" v-on:submit.prevent="sendData">
    <!--
    v-on:submit.prevent="$EventBus.$emit('수정하세')"
    -->
    <base-input v-model="inputText" type="text" placeholder="  검색하고자 하는 법률명을 입력하여주세요."
    onfocus="this.placeholder=''" onblur="this.placeholder='  검색하고자 하는 법률명을 입력하여주세요.'">
    </base-input>
    <!-- <button v-on:click.prevent="sendData">click me!</button> -->
  </form>
</template>

<script>
// import axios from 'axios';
import BaseInput from './BaseInput.vue';
import EventBus from '@/eventBus.js';

export default {
  components: {
    'base-input': BaseInput
  },
  data: function() {
    return {
      inputText: ''
    }
  },
  name: 'InputSearch',
  methods: {
    sendData: function() {
      EventBus.$emit('send', this.inputText);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: 'SeoulHangangM';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/SeoulHangangM.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

input {
  font-weight: bold;
  font-size: 20px;
  color: #6667AB;
  font-family: 'SeoulHangangM';
  padding: 0;
  margin: 0;
  width: 504px;
  height: 47px;
  box-sizing: border-box;
  border-style: solid;
  border-radius: 10px;
  border-color: #6667AB;
  border-left-style: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  text-align: left;
  border-width: 4px;
  border-top-color: #6667AB;
  box-shadow: 4px 4px 4px;
  outline: none;
  padding-left: 10px;
}

input::placeholder {
  color: #6667AB;
  font-style: normal;
}
</style>
