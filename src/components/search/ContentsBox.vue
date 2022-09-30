<template>
  <span class="contentsbox">
    <div class="flexbox">
      <!-- 내용 -->
      <ul>
        <div>
          <span class="contentsbox">
            <a :href="'https://www.law.go.kr' + resultLists[0].law_url" target="_blank">{{ resultLists[0].law_title }}</a> - {{ resultLists[0].law_kind }} <br>
            {{ resultLists[0].law_org_name }} - {{ resultLists[0].law_start_date }}
          </span>
        </div>
      </ul>

    </div>
  </span>
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
  font-style:normal;
}



</style>
