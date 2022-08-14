<template>
  <div class="home">
    <header>
      <HeaderMain></HeaderMain>
    </header>
    <div id="backimg">
    <BackgroundImage></BackgroundImage>
    </div>
    <body>
      <SearchBar id="searchbarbox"></SearchBar>
    </body>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMain from '@/components/header/HeaderMain.vue'
import SearchBar from '@/components/search/SearchBar.vue'
import BackgroundImage from '@/components/body/BackgroundImage.vue'

export default {
  name: 'SearchingView',
  components: {
    HeaderMain,
    SearchBar,
    BackgroundImage
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

#backimg {
  position: absolute;
  top: 160px;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: -200;
}

#searchbarbox {
  margin: 0;
  padding: 0;
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 5;
  text-align: center;
}
</style>
