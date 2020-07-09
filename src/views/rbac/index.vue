<template>
  <div class="rbac-wrapper">
    <template v-if="loginStatus">
      <side-bar></side-bar>
      <router-view></router-view>
    </template>
    <div class="login" v-else>
      <input type="text" v-model="userInfo.userId" />
      <input type="password" v-model="userInfo.password" />
      <button @click="handleLogin">登录</button>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
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
    handleLogin() {
      let userInfo = { userId: this.userInfo.userId, token: Math.random() };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      this.loginStatus = true;
      this.updateUserInfo(userInfo);
    }
  }
};
</script>
<style lang="scss">
.login {
  display: flex;
  flex-direction: column;
  margin: 40px;
  input {
    line-height: 38px;
    appearance: none;
    margin-top: 15px;
    outline: none;
    border: 1px rgba(193, 193, 193, 1) solid;
    border-radius: 5px;
  }
  button {
    line-height: 32px;
    appearance: none;
    margin-top: 15px;
    color: rgba(255, 255, 255, 1);
    background: rgba(55, 155, 205, 1);
    border: 1px rgba(55, 105, 195, 1) solid;
    border-radius: 5px;
  }
}
</style>