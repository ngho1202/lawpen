<template>
  <div class="wrap">
        <div class="login">
            <div class="login_id">
                <h4>E-mail</h4>
                <input type="email" id="loginbox" placeholder="Email">
            </div>
            <div class="login_pw">
                <h4>Password</h4>
                <input type="password" id="passwordbox" placeholder="Password">
            </div>
            <!-- <div class="login_etc">
                <div class="checkbox">
                <input type="checkbox" name="" id=""> Remember Me?
                </div>
                <div class="forgot_pw">
                <a href="">Forgot Password?</a>
                </div>
            </div> -->
            <div class="submit">
                <input type="submit" value="로그인">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SignIn'
}
</script>

<style scoped>
@font-face {
    font-family: 'SeoulHangangM';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/SeoulHangangM.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'SeoulHangangM';
}

a {
  text-decoration: none;
  color: black;
}

li {
  list-style: none;
}

.wrap {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login {
  width: 383px;
  height: 455px;
  background: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #6667AB;
}

.login_id, .login_pw {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h4 {
  font-size: 18px;
  color: white;
  display:flex;
  margin-right: auto;
  margin-bottom: 5px;
}

.submit {
  background-color: #C3C4FF;
  width: 132px;
  height: 39px;
  margin-top: 70px;
  border-radius: 10px;
}

.submit input {
  background-color: #C3C4FF;
  width: 132px;
  height: 39px;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 20px;
  font-family: 'SeoulHangangM';
  font-weight: bold;
  letter-spacing: 2px;
}


#loginbox, #passwordbox {
  font-size: 18px;
  width: 280px;
  height: 39px;
  background-color: white;
  border-radius: 10px;
  outline: none;
  color: black;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border-style: none;
  padding-left: 10px;
  margin-bottom: 10px;
}


</style>
