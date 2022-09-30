<template>
  <div class="home">
    <header>
      <HeaderMain></HeaderMain>
    </header>
    <body>
      <SearchBar id="searchbarbox"></SearchBar>
      <ContentsBox class="contentsbox" v-bind:rank="index">
      </ContentsBox>
      <!--
      <div class="contentsbox">
        <p> 2 </p>
      </div>
    -->
    </body>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMain from '@/components/header/HeaderMain.vue'
import SearchBar from '@/components/search/SearchBar.vue'
import ContentsBox from '@/components/search/ContentsBox.vue'

export default {
  name: 'SearchResultView',
  components: {
    HeaderMain,
    SearchBar,
    ContentsBox
  },
  data: function() {
    return index: 0;
  }
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
  width: 900px;
  height: 150px;
  display: block;
  position: relative;
  border: 1px solid black;
  margin: 10px;
}
</style>
