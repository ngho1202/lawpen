<template>
  <form class="searchInput" id="form_tag" v-on:submit.prevent="submitInput">
    <input id="law_title" v-model="law_title" type="text" placeholder="  검색하고자 하는 법률명을 입력하여주세요."
      onfocus="this.placeholder=''" onblur="this.placeholder='  검색하고자 하는 법률명을 입력하여주세요.'">
  </form>
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      law_title: '',
    }
  },
  name: 'InputSearch',
  methods: {
    submitInput: function () {
      console.log(this.law_title)
      axios.get('http://localhost:8888/lawresult/' + this.law_title).then(function (response) {
        console.log(response);
        this.result = response.data
      }).catch(function (error) {
        console.log(error);
      });
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
