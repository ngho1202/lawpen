<template>
  <span class="searchbar">
    <div class="flexbox">
      <DropBox></DropBox>
    </div>
    <div class="flexbox">
      <InputSearch></InputSearch> </div>
  </span>
</template>

<script>
import DropBox from '@/components/search/DropBox.vue'
import InputSearch from '@/components/search/InputSearch.vue'

export default {
  name: 'SearchBar',
  components: {
    DropBox,
    InputSearch
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

.searchbar {
  display: inline;
  text-align: center;
  min-width: 670px;
}

.flexbox {
  display: inline-block;
}

</style>
