<template>
  <div class="dropdown">
    <div>
      <select>
        <option value="1">전체</option>
        <option value="2">법률</option>
        <option value="3">판례</option>
        <option value="4">행정규칙</option>
        <option value="5">자치법</option>
      </select>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DropBox'
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

select {
  font-weight: bold;
  font-size: 20px;
  color: #6667AB;
  font-family: 'SeoulHangangM';
  padding: 0;
  width: 150px;
  height: 47px;
  margin: 0;
  border-style: solid;
  border-radius: 10px;
  border-color: #6667AB;
  border-right-style: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  text-align: center;
  border-width: 4px;
  border-top-color: #6667AB;
  box-shadow: 4px 4px 4px;
}
</style>
