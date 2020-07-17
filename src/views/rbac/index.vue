<template>
  <div class="rbac-wrapper">
    <div class="container" v-if="loginStatus">
      <side-bar class="side-bar"></side-bar>
      <div class="center">
        <router-view></router-view>
      </div>
    </div>
    <div class="login" v-else>
      <input type="text" v-model="userInfo.userId" />
      <input type="password" v-model="userInfo.password" />
      <button @click="handleLogin">登录</button>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import request from "request";
export default {
  components: {
    sideBar: () => import("./coms/sidebar.vue")
  },
  data() {
    return {
      userInfo: {
        userId: "",
        password: ""
      },
      loginStatus: false
    };
  },
  mounted() {
    this._checkLoginStatus();
  },
  methods: {
    ...mapMutations("rbac", ["updateUserInfo"]),
    _checkLoginStatus() {
      let userInfo = localStorage.getItem("userInfo");
      if (userInfo) {
        this.userInfo = JSON.parse(userInfo);
        this.loginStatus = true;
      } else {
        this.loginStatus = false;
      }
    },
    async handleLogin() {
      let res = await request({
        url: "/backend_rbac/userAuth",
        method: "post",
        params: {
          userId: this.userInfo.userId,
          password: this.userInfo.password
        },
        data: {
          userId: this.userInfo.userId,
          password: this.userInfo.password
        }
      });
      console.log(res, 55);
      // let userInfo = { userId: this.userInfo.userId, token: Math.random() };
      // localStorage.setItem("userInfo", JSON.stringify(userInfo));
      // this.loginStatus = true;
      // this.updateUserInfo(userInfo);
    }
  }
};
</script>
<style lang="scss">
.login {
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 300px auto;
  input {
    line-height: 48px;
    appearance: none;
    margin-top: 15px;
    outline: none;
    border: 1px rgba(193, 193, 193, 1) solid;
    border-radius: 5px;
    font-size: 26px;
  }
  button {
    line-height: 52px;
    appearance: none;
    margin-top: 15px;
    color: rgba(255, 255, 255, 1);
    background: rgba(55, 155, 205, 1);
    border: 1px rgba(55, 105, 195, 1) solid;
    border-radius: 5px;
    font-size: 26px;
  }
}
.container {
  display: flex;
}
.side-bar {
  width: 100px;
  flex-shrink: 1;
}
.center {
  flex: 1;
}
</style>