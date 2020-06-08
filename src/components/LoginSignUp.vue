<template>
<div class="login-box">
  <img class="logo" src="../assets/common/logo.png" alt="">
  <form>
    <div class="user-box">
      <input type="text" name="" required="">
      <label>Phone number, username, or email</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required="">
      <label>Password</label>
    </div>
    <a class="default" href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Log in
    </a>
    <div class="separator">
      <div></div>
      <p>OR</p>
      <div></div>
    </div>
    <p>Login with</p>
    <div class="social">
      <a class="fa-link default" href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
      <a class="fa-link default" href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
      <a class="fa-link default" href="#"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
    </div>
    <a class="forgot-psw" href="#">Forgot the password?</a>
    <p>Don't have an account? <a class="sign-up" href="#">Sign up</a></p>
  </form>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.login-box {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 40px;
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);
  box-sizing: border-box;
}

.logo{
  width: 60%;
  margin: 0 auto 20px;
}

.login-box p {
  font-size: 16px;
  color: #a08b49;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #a08b49;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #a08b49;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #a08b49;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #a08b49;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #a08b49;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  letter-spacing: 4px;
  outline: none;
}

.login-box .default:hover {
  background: #a08b49;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #a08b49,
              0 0 25px #a08b49,
              0 0 50px #a08b49,
              0 0 100px #a08b49;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #a08b49);
  animation: btn-anim1 1s linear infinite;
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #a08b49);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #a08b49);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}
.login-box .forgot-psw{
  padding: 0;
  margin: 20px 0;
  text-transform: initial;
}
.login-box .sign-up{
  display: initial;
  padding: 0;
  font-size: 18px;
  text-transform: initial;
}

.separator{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
}
.separator div{
  width: 40%;
  height: 1px;
  background-color: #a08b49;
}

.social{
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.social .fa-link{
  padding: 5px;
  width: 40px;
  height: 40px;
}

.social svg{
  width: 100%;
  height: 100%;
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #a08b49);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}
</style>
