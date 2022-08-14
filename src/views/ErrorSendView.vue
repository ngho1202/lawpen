<template>
  <div class="home">
    <header>
      <HeaderMain></HeaderMain>
    </header>
    <div id="backimg">
    <BackgroundImage></BackgroundImage>
    </div>
    <body>
    </body>
    <footer>
      <div id="searchbarbox">
        <SearchBar></SearchBar>
      </div>
      <div id="contentsbox">
        <RankingList id="footer1"></RankingList>
        <CategoryBox id="footer2"></CategoryBox>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMain from '@/components/header/HeaderMain.vue'
import SearchBar from '@/components/search/SearchBar.vue'
import BackgroundImage from '@/components/body/BackgroundImage.vue'
import RankingList from '@/components/footer/RankingList.vue'
import CategoryBox from '@/components/footer/CategoryBox.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderMain,
    SearchBar,
    BackgroundImage,
    RankingList,
    CategoryBox
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
  margin: 80px 0 ;
  justify-content: center;
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
}

footer {
  position: relative;
  display: block;
  width: 100%;
  min-height: 245px;
  z-index: 5;
  background-color: #C3C4FF;
  padding: 0;
  margin: 0;
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

#contentsbox {
  margin-top: 40px;
  display: inline-block;
  width: 100%;
  vertical-align: middle;
}



</style>
