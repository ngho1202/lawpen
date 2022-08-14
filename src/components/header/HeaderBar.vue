<template>
  <div class="headerbar">
    <ul>
      <router-link style=text-decoration:none; :to="{ name: 'signin', params: {} }"><li>로그인</li></router-link>
      <router-link style=text-decoration:none; :to="{ name: 'signup', params: {} }"><li>회원가입</li></router-link>
      <li>오류문의</li>
      <li><img src='@/assets/usericon.png'></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
@font-face {
    font-family: 'SeoulHangangM';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/SeoulHangangM.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

.headerbar {
  padding: 0;
  margin: 0;
  font-family: 'SeoulHangangM';
  font-size: 15px;
  font-weight: bold;
}

li {
  list-style: none;
}

li:hover{
  color:#6667AB;
  font-style: bold;
}

.headerbar ul li {
  float: left;
  margin-left: 20px;
}

li img {
  display: inline-block;
  width: 16px;
  height: 16px;
  padding: 0;
}
</style>
