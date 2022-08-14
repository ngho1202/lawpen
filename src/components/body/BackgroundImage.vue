<template>
  <img src="@/assets/colorfulsphere.png">
</template>

<script>
export default {
  name: 'BackgroundImage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

img {
  -webkit-animation: rotating 45s linear infinite;
  -moz-animation: rotating 45s linear infinite;
  -ms-animation: rotating 45s linear infinite;
  -o-animation: rotating 45s linear infinite;
  animation: rotating 45s linear infinite;
  overflow: visible;
}


img{
  position: relative;
  overflow: visible;
  width: 550px;
  height: 550px;
  z-index: -100;
}
</style>
