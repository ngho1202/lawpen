<template>
  <div class="home">
    <header>
      <HeaderMain></HeaderMain>
    </header>
    <div id="backimg">
    <BackgroundImage></BackgroundImage>
    </div>
    <body>
      <SignIn></SignIn>
    </body>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMain from '@/components/header/HeaderMain.vue'
import BackgroundImage from '@/components/body/BackgroundImage.vue'
import SignIn from '@/components/sign/SignIn.vue'

export default {
  name: 'SearchingView',
  components: {
    HeaderMain,
    BackgroundImage,
    SignIn
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
}

body {
  position: relative;
  z-index: 10;
}

#backimg {
  position: fixed;
  top: 23%;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: -200;
}

</style>
