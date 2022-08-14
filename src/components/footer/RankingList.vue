<template>
  <div>
    <ul>
      <li>검색어 순위 1</li>
      <li>검색어 순위 2</li>
      <li>검색어 순위 3</li>
      <li>검색어 순위 4</li>
      <li>검색어 순위 5</li>
      <li>검색어 순위 6</li>
      <li>검색어 순위 7</li>
      <li>검색어 순위 8</li>
      <li>검색어 순위 9</li>
      <li>검색어 순위 10</li>
    </ul>
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
  margin: 0;
  padding: 0;
  font-family: 'SeoulHangangM';
}

div {
  display: inline-block;
  width: 320px;
  height: 160px;
  border: 4px solid #6667AB;
  background-color: white;
  margin: 0;
  padding: 0;
  box-shadow: 4px 4px 4px grey;
}

ul {
  margin-top: 4px;
  padding: 0;
}

ul li {
  list-style: none;
  margin: 0;
  padding: 0;
}


</style>
