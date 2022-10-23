<template>
      <ul>
        <span class="contentsBox" @click="linking(dataset[index])" style="cursor: pointer;">
          <div class="contentsTitle">
            {{ dataset[index].law_title }} - {{ dataset[index].law_kind }}
          </div>
          <div class="contentsData">
            {{ dataset[index].law_org_name }} - {{ dataset[index].law_start_date }}
          </div>
        </span>
      </ul>
</template>

<script>
export default {
  name: 'ContextBox',
  data () {
    return {
      inputText: '',
      index: this.rank - 1,
    }
  },
  props: ["rank", "resultList"],
  computed: {
    dataset() {
      return this.resultList
    }
  },
  methods: {
    linking(data) {
      window.open('http://law.go.kr' + data.law_url);
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
