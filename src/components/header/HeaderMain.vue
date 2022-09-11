<template>
  <div class="headermain">
    <div class="headerel">
      <HeaderLogo></HeaderLogo>
    </div>
    <div class="headerel">
      <HeaderBar id="barcustom"></HeaderBar>
    </div>
  </div>
</template>

<script>
import HeaderLogo from '@/components/header/HeaderLogo.vue'
import HeaderBar from '@/components/header/HeaderBar.vue'

export default {
  name: 'HeaderMain',
  components: {
    HeaderLogo,
    HeaderBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

.headermain {
  display: flex;
  justify-content: space-between;
  width: 900px;
}

.headerel {
  display: inline-block;
}

#barcustom {
  padding-top: 25px;
}

</style>
