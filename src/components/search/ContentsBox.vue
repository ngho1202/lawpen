<template>
      <ul>
        <span class="contentsBox" @click="linking(resultList[rank])" style="cursor: pointer;">
          <div class="contentsTitle">
            <a :href="'https://www.law.go.kr' + resultList[rank].law_url" target="_blank">{{ resultList[rank].law_title }}</a> - {{ resultList[rank].law_kind }}
          </div>
          <div class="contentsData">
            {{ resultList[rank].law_org_name }} - {{ resultList[rank].law_start_date }}
          </div>
        </span>
      </ul>
</template>



<script>
// import resultList from '@/assets/lawpen_dummy.json'

export default {
  name: 'ContextBox',

  data () {
    return {
      inputText: ''
    }
  },
  props: ["rank", "resultList"],
  methods: {
    linking(data) {
      window.open('http://law.go.kr' + data.law_url);
      //console.log(data.law_url);
    },

    // submitInput: function () {
    //   console.log(this.inputText)
    //   axios.get('http://localhost:8888/lawresult/' + this.value).then(function (response) {
    //     console.log(response);
    //     this.result = response.data
    //   }).catch(function (error) {
    //     console.log(error);
    //   });
    // }

  },
  // computed: {
  //   resultLists() {
  //     return resultList.map((items) => {
  //       return items;
  //     });
  //   },
  // //   getUrl() {
  // //     var url = this.resultLists[this.rank].law_url;
  // //     return url;
  // //   }
  // },


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
