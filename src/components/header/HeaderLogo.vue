<template>
  <div class="logo">
    <p>
      <router-link style=text-decoration:none; :to="{ name: 'home', params: {} }"><ul id="logoimage">LAWPEN</ul></router-link>
      <ul id="logotext">법에 대한 모든 것! <span id="logobold">로픈</span>에서</ul>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HeaderLogo'
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

.logo {
  padding: 0;
  border: 0;
  margin: 0;
}

#logoimage {
  color: #6667AB;
  font-size: 35px;
  font-family: 'Bakbak One', cursive;
  padding: 0;
  border: 0;
  margin: 0;
}

#logotext {
  color: black;
  font-size: 11.5px;
  font-family: "SeoulHangangM";
  font-weight: bold;
  font-style: normal;
  padding: 0;
  border: 0;
  margin: 0;
}

#logobold {
  color: #6667AB;
  font-size: 14px;
  font-family: "SeoulHangangM";
  font-weight: bold;
  font-style: normal;
}
</style>
