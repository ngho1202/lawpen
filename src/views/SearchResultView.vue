<template>
  <div class="home">
    <header>
      <HeaderMain></HeaderMain>
    </header>
    <body>
      <SearchBar id="searchbarbox"></SearchBar>
      <div class="loadingspiner" v-show="isLoading">
        <br>
        <br>
        <PulseLoader />
      </div>
      <ContentsBox class="contentsbox"
      v-bind:rank="index"
      v-bind:resultList="resultLists"
      v-for="index in 20" :key="index">
      </ContentsBox>
    </body>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMain from '@/components/header/HeaderMain.vue'
import SearchBar from '@/components/search/SearchBar.vue'
import ContentsBox from '@/components/search/ContentsBox.vue'
import PulseLoader from '@/components/search/PulseLoaderLoader.vue'
import axios from 'axios';

export default {
  name: 'SearchResultView',
  components: {
    HeaderMain,
    SearchBar,
    ContentsBox,
    PulseLoader
  },

  data() {
    return {
      index: 0,
      resultLists: '',
      temp: this.$route.params.law_title,
      isLoading: true,
    }
  },

created: async function() {
    let input_value = this.temp;
    axios.get('/api/lawresult/' + input_value).then( (response) => {
      this.resultLists = response.data.toString();
      this.resultLists = this.resultLists.slice(0, this.resultLists.length + 1);
      this.resultLists = JSON.parse(this.resultLists);
      console.log("after", this.resultLists);
      this.isLoading = false

    }).catch( (error) => {
      console.log(error);
    });
  },

  beforeRouteUpdate (to, from, next) {
    this.temp = to.params.law_title;
    const input_value = this.temp;
    // console.log(this.$route.params.law_title);

    axios.get('/api/lawresult/' + input_value).then( (response) => {
      let result_str = response.data.toString();
      result_str = result_str.slice(0, result_str.length + 1);
      let json_result = JSON.parse(result_str);
      this.resultLists = json_result;
    }).catch( (error) => {
      console.log(error);
    });
    next()
  },

}
</script>

<style scoped>
.home {
  position: relative;
  display: block;
  margin: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  scrollbar-width: none;
}
header {
  position: relative;
  display: flex;
  height: 250px;
  align-items: center;
  justify-content: center;
  background-color: #C3C4FF;
}
body {
  position: relative;
  height: 400px;
  display: inline-block;
}
#searchbarbox {
  margin: 0;
  padding: 0;
  position: absolute;
  top: -70px;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 5;
  text-align: center;
}
.contentsbox {
  text-align: left;
  width: 900px;
  height: flex;
  display: block;
  position: relative;
  border: 1px solid lightgray;
  margin: 10px;
}
</style>
