<template>
  <div class="categories">
    <div id="box1">법률</div>
    <div id="box2">판례</div>
    <div id="box3">행정규칙</div>
    <div id="box4">자치조례</div>
  </div>
</template>

<script>
export default {
  name: 'RankingList'
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

* {
  font-family: 'SeoulHangangM';
}

.categories {
  position: relative;
  display: inline-block;
  width: 320px;
  height: 165px;
  margin-left: 16px;
}

#box1, #box2, #box3, #box4 {
  position: absolute;
  width: 153px;
  height: 77px;
  line-height: 77px;
  box-sizing: border-box;
  box-shadow: 4px 4px 4px grey;
  font-size: 19px;
  font-weight: bold;
  vertical-align: middle;
}

#box1, #box4 {
  background-color: #6667AB;
  color: white;
}

#box2, #box3 {
  background-color: white;
  color: black;
}

#box1 {
  left: 0;
  top: 0;
}

#box2 {
  right: 0;
  top: 0;
}

#box3 {
  left: 0;
  bottom: 0;
}

#box4 {
  right: 0;
  bottom: 0;
}

</style>
