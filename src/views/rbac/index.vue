<template>
  <div class="rbac-wrapper">
    <div class="container" v-if="loginStatus">
      <div class="side-bar">
        <side-bar></side-bar>
      </div>
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
      loginStatus: false,
      errTip: {
        use: false,
        msg: ""
      }
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
        url: "/backend_rbac/login",
        method: "post",
        // params: {
        //   userId: this.userInfo.userId,
        //   password: this.userInfo.password
        // },
        data: {
          userId: this.userInfo.userId,
          password: this.userInfo.password
        }
      });
      if (res.status !== 200) {
        console.log("请求异常");
        this.errTip = {
          use: true,
          msg: "请求异常"
        };
        return;
      }
      if (!res.data.status) {
        console.log("登录失败");
        this.errTip = {
          use: true,
          msg: res.data.msg
        };
      }
      // 登录成功
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          userId: this.userInfo.userId,
          token: res.headers["authorization"]
        })
      );
      this.updateUserInfo({
        userId: this.userInfo.userId,
        token: res.headers["authorization"]
      });
      this.loginStatus = true;
      return;
    }
  }
};
</script>
<style lang="scss" scoped>
.rbac-wrapper {
  width: 100%;
  height: 100%;
}
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
  flex-direction: row;
  width: 100%;
  height: 100%;
}
.side-bar {
  // width: 230px;
  height: 100%;

  flex-shrink: 1;
  border: 1px black solid;
}
.center {
  flex: 1;
  flex-shrink:1;
  border:1px red solid;
}
</style>