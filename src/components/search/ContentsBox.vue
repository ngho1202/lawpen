<template>
      <ul>
        <span class="contentsBox">
          <div class="contentsTitle" style=" background-color: gold; width: 300px; height: auto; cursor: pointer;"
          onclick="window.open('http://law.go.kr' + resultLists[rank].law_url;" target="_blank">
            <a :href="'https://www.law.go.kr' + getUrl" target="_blank">{{ resultLists[rank].law_title }}</a> - {{ resultLists[rank].law_kind }}
          </div>
          <div class="contentsData">
            {{ resultLists[rank].law_org_name }} - {{ resultLists[rank].law_start_date }}
            <a :href="'https://www.law.go.kr' + resultLists[rank].law_url" target="_blank">hihhihihihii</a>
          </div>
        </span>
      </ul>
</template>



<script>
import resultList from '@/assets/lawpen_dummy.json'

export default {
  name: 'ContextBox',
  /*
  data: () => {
    resultLists: resultList
  },
  */
  props: ["rank"],
  computed: {
    resultLists() {
      return resultList.map((items) => {
        return items;
      });
    },
    getUrl() {
      var url = this.resultLists[this.rank].law_url;
      return url;
    }
  },

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

.contentsTitle {
  font-size: 1.1em;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
}
/*
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
  font-style:normal;
}
*/


</style>
