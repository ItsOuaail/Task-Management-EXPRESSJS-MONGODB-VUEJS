<template>
  <div class="section1">
    <div class="container">
      <div class="row full-height justify-content-center">
        <div class="col-12 text-center align-self-center py-5">
          <div class="section pb-5 pt-5 pt-sm-2 text-center">
            <h6 class="center1 mb-0 pb-3">
              <span>Log In </span><span>Sign Up</span>
            </h6>
            <input
              class="checkbox"
              type="checkbox"
              id="reg-log"
              name="reg-log"
            />
            <label for="reg-log"></label>
            <div class="card-3d-wrap mx-auto">
              <div class="card-3d-wrapper">
                <div class="card-front"> 
                  <div class="center-wrap">
                    <div class="section text-center">
                      <h4 class="mb-4 pb-3">Log In</h4>
                      <div class="form-group">
                        <input
                        v-model="usernamel"
                          type="text"
                          name="logname"
                          class="form-style"
                          placeholder="Your Username"
                          id="logname"
                          autocomplete="off" required
                        />
                        <i class="input-icon uil uil-user"></i>
                      </div>
                      <div class="form-group mt-2">
                        <input
                        v-model="passwordl"
                          type="password"
                          name="logpass"
                          class="form-style"
                          placeholder="Your Password"
                          id="logpass"
                          autocomplete="off" required
                        />
                        <div class="err">{{ errorr }}</div>
                        <i class="input-icon uil uil-lock-alt"></i>
                      </div>
                      <a href="#" class="btn mt-4" @click="handelLogin">submit</a>
                      <p class="mb-0 mt-4 text-center">
                        <a href="#0" class="link">Forgot your password?</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card-back">
                  <div class="center-wrap">
                    <div class="section text-center">
                      <h4 class="mb-4 pb-3">Sign Up</h4>
                      <div class="form-group">
                        <input
                          v-model="username"
                          type="text"
                          name="logname"
                          class="form-style"
                          placeholder="Your Username"
                          id="logname"
                          autocomplete="off"
                        />
                        <i class="input-icon uil uil-user"></i>
                      </div>
                      <div class="form-group">
                        <input
                          v-model="numero"
                          type="text"
                          name="logname"
                          class="form-style"
                          placeholder="Your Number"
                          id="logname"
                          autocomplete="off"
                        />
                        <i class="input-icon uil uil-phone"></i>
                      </div>
                      <div class="form-group mt-2">
                        <input
                          v-model="email"
                          type="email"
                          name="logemail"
                          class="form-style"
                          placeholder="Your Email"
                          id="logemail"
                          autocomplete="off"
                        />
                        <i class="input-icon uil uil-at"></i>
                      </div>
                      <div class="form-group mt-2">
                        <input
                          v-model="password"
                          type="password"
                          name="logpass"
                          class="form-style"
                          placeholder="Your Password"
                          id="logpass"
                          autocomplete="off"
                        />
                        <i class="input-icon uil uil-lock-alt"></i>
                      </div>
                      <div class="err">{{ errorrS }}</div>
                      <a href="#" class="btn mt-4" @click="handleSignup"
                        >submit</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
      email: "",
      numero: "",
      password: "",
      usernamel: "",
      passwordl: "",
      errorr: null,
      errorrS: null
    };
  },
  methods: {
    ...mapActions(["signup"]),
    ...mapActions(["login"]),
    async handleSignup() {
      const userData = {
        username: this.username,
        email: this.email,
        numero: this.numero,
        password: this.password,
      };
      try {
        console.log(userData);
        await this.signup(userData);
        this.$router.push("/confirm");
      } catch (error) {
        this.errorrS = error.response.data.error;
        console.error("Signup failed:", error.response.data.error );
      }
    },
    async handelLogin() {
      const credentials = {
          username: this.usernamel,
          password: this.passwordl
      };
      try {
        await this.login(credentials);
        this.$router.push("/dashboard");
        
      } catch (error) {
        this.errorr = error.response.data.error;
        console.error("login failed:", error.response.data.error);
      }
    }
  },
};
</script>
<style scoped>
@import url("https://unicons.iconscout.com/release/v4.0.0/css/line.css");

body {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 15px;
  line-height: 1.7;
  color: #c4c3ca;
  background-color: #e3e3e3;
  overflow-x: hidden;
}
a {
  cursor: pointer;
  transition: all 200ms linear;
}
a:hover {
  text-decoration: none;
}
.link {
  color: #c4c3ca;
}
.link:hover {
  color: #ffeba7;
}
p {
  font-weight: 500;
  font-size: 14px;
  line-height: 1.7;
}
h4 {
  font-weight: 600;
}
h6 span {
  padding: 0 20px;
  text-transform: uppercase;
  font-weight: 700;
}
.center1 {
  text-align: center;
}
.section {
  position: relative;
  width: 100%;
  display: block;
}
.section1 {
  background: rgb(121, 121, 120);
  background: -moz-radial-gradient(
    circle,
    rgba(121, 121, 120, 1) 0%,
    rgba(155, 155, 124, 1) 41%,
    rgba(255, 255, 187, 1) 100%
  );
  background: -webkit-radial-gradient(
    circle,
    rgba(121, 121, 120, 1) 0%,
    rgba(155, 155, 124, 1) 41%,
    rgba(255, 255, 187, 1) 100%
  );
  background: radial-gradient(
    circle,
    rgba(121, 121, 120, 1) 0%,
    rgba(155, 155, 124, 1) 41%,
    rgba(255, 255, 187, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#797978",endColorstr="#ffffbb",GradientType=1);
}
.full-height {
  min-height: 100vh;
}
[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
  position: absolute;
  left: -9999px;
}
.checkbox:checked + label,
.checkbox:not(:checked) + label {
  position: relative;
  display: block;
  text-align: center;
  width: 60px;
  height: 16px;
  border-radius: 8px;
  padding: 0;
  margin: 10px auto;
  cursor: pointer;
  background-color: #ffeba7;
}
.checkbox:checked + label:before,
.checkbox:not(:checked) + label:before {
  position: absolute;
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: #ffeba7;
  background-color: #323434;
  font-family: "unicons";
  content: "\\"; /* Updated Unicode for icon */
  z-index: 20;
  top: -10px;
  left: -10px;
  line-height: 36px;
  text-align: center;
  font-size: 24px;
  transition: all 0.5s ease;
}
.checkbox:checked + label:before {
  transform: translateX(44px) rotate(-322deg);
}

.card-3d-wrap {
  position: relative;
  width: 440px;
  max-width: 100%;
  height: 400px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  perspective: 800px;
  margin-top: 60px;
}
.card-3d-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: all 600ms ease-out;
}
.card-front,
.card-back {
  width: 100%;
  height: 100%;
  background-color: #2a2b38;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg");
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 300%;
  position: absolute;
  border-radius: 6px;
  left: 0;
  top: 0;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
}
.card-back {
  transform: rotateY(180deg);
}
.checkbox:checked ~ .card-3d-wrap .card-3d-wrapper {
  transform: rotateY(180deg);
}
.center-wrap {
  position: absolute;
  width: 100%;
  padding: 0 35px;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 35px) perspective(100px);
  z-index: 20;
  display: block;
}

.form-group {
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
}
.form-style {
  padding: 13px 20px;
  padding-left: 55px;
  height: 48px;
  width: 100%;
  font-weight: 500;
  border-radius: 4px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.5px;
  outline: none;
  color: #c4c3ca;
  background-color: #1f2029;
  border: none;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
}
.form-style:focus,
.form-style:active {
  border: none;
  outline: none;
  box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
}
.input-icon {
  position: absolute;
  top: 0;
  left: 18px;
  height: 48px;
  font-size: 24px;
  line-height: 48px;
  text-align: left;
  color: #ffeba7;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.form-group input:-ms-input-placeholder {
  color: #c4c3ca;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}
.form-group input::-moz-placeholder {
  color: #c4c3ca;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}
.form-group input:-moz-placeholder {
  color: #c4c3ca;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}
.form-group input::-webkit-input-placeholder {
  color: #c4c3ca;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}
.form-group input:focus:-ms-input-placeholder {
  opacity: 0;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}
.form-group input:focus::-moz-placeholder {
  opacity: 0;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}
.form-group input:focus:-moz-placeholder {
  opacity: 0;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}
.form-group input:focus::-webkit-input-placeholder {
  opacity: 0;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.btn {
  border-radius: 1rem;
  height: 3rem;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  padding: 0 30px;
  letter-spacing: 1px;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  -ms-flex-pack: center;
  text-align: center;
  border: none;
  background-color: #ffeba7;
  color: #102770;
  box-shadow: 0 8px 24px 0 rgba(255, 235, 167, 0.2);
  transition: 0.7s ease;
}
.btn:active,
.btn:focus {
  background-color: #102770;
  color: #ffeba7;
  box-shadow: 0 8px 24px 0 rgba(16, 39, 112, 0.2);
}
.btn:hover {
  background-color: #252626;
  color: #ffeba7;
  box-shadow: 0 8px 24px 0 rgba(16, 39, 112, 0.2);
  transform: scale(1.03);
  box-shadow: 0 2px 4px rgba(55, 55, 43, 0.311);
}

.logo {
  position: absolute;
  top: 30px;
  right: 30px;
  display: block;
  z-index: 100;
  transition: all 250ms linear;
}
.logo img {
  height: 26px;
  width: auto;
  display: block;
}

.err{
  color: red;
}
</style>

