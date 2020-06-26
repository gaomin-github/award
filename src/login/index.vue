<template>
  <div class="login-wrapper">
    <div class="content">
      <template v-if="userInfo">
        <div class="userInfo">欢迎用户：{{ userInfo.userName }}</div>
      </template>
      <template v-else>
        <!-- 注册模块 -->
        <template v-if="curCom === 'reg'">
          <div v-for="(item, regIndex) in reg" :key="regIndex" class="horz">
            <label class="horz-label">{{ item.label }}</label>
            <template v-if="item.type === 'input'">
              <input
                type="text"
                class="horz-content"
                v-model="item.value"
                :placeholder="item.placeHolder"
              />
            </template>
            <template v-if="item.type === 'pwd'">
              <input
                type="password"
                class="horz-content"
                v-model="item.value"
                :placeholder="item.placeHolder"
              />
            </template>
          </div>
        </template>
        <!-- 登陆模块 -->
        <template v-if="curCom === 'login'">
          <div v-for="(item, regIndex) in login" :key="regIndex" class="horz">
            <label class="horz-label">{{ item.label }}</label>
            <template v-if="item.type === 'input'">
              <input
                type="text"
                class="horz-content"
                v-model="item.value"
                :placeholder="item.placeHolder"
              />
            </template>
            <template v-if="item.type === 'pwd'">
              <input
                type="password"
                class="horz-content"
                v-model="item.value"
                :placeholder="item.placeHolder"
              />
            </template>
          </div>
        </template>
        <div class="btns">
          <div class="btns-label" @click="changeComs">
            {{ curCom === "reg" ? "已有账号，去登陆" : "新用户，去注册" }}
          </div>
          <div class="btns-submit" @click="submitInfo">
            {{ curCom === "reg" ? "注册" : "登陆" }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import request from "request";

export default {
  data() {
    return {
      reg: {
        userName: {
          label: "用户名",
          type: "input",
          placeHolder: "用户名",
          value: "",
        },
        password: {
          label: "密码",
          type: "pwd",
          placeHolder: "密码",
          value: "",
        },
        pwdconfirm: {
          label: "确认密码",
          type: "pwd",
          placeHolder: "确认密码",
          value: "",
        },
      },
      login: {
        userName: {
          label: "用户名",
          type: "input",
          placeHolder: "用户名",
          value: "",
        },
        password: {
          label: "密码",
          type: "pwd",
          placeHolder: "密码",
          value: "",
        },
        vCode: {
          label: "验证码",
          type: "vCode",
          placeHolder: "验证码",
          value: "",
        },
      },
      curCom: "login",
      userInfo: null,
    };
  },
  async mounted() {
    this._initUserInfo();
    let loginStatus = await this._getLoginInfo();
    if (!loginStatus) {
      console.log("未登陆");
      localStorage.clear();
    } else {
      console.log("一登陆");
    }
  },
  methods: {
    _initUserInfo() {
      let userInfo_str = localStorage.getItem("userInfo");
      if (userInfo_str) {
        this.userInfo = JSON.parse(userInfo_str);
      }
    },
    changeComs() {
      this.curCom = this.curCom === "reg" ? "login" : "reg";
    },
    submitInfo() {
      if (this.curCom === "reg") {
        console.log("用户信息注册");
        this._registerInfo();
      } else {
        this._loginHandler();
      }
    },
    async _registerInfo() {
      // let username=this.reg.find()
      let result = await request({
        url: "/common/register",
        method: "post",
        data: {
          userName: this.reg.userName.value,
          pwd: this.reg.password.value,
        },
      });
      console.log(result, 92);
    },
    async _loginHandler() {
      let result = await request({
        url: "/common/login",
        method: "post",
        data: {
          userName: this.login.userName.value,
          pwd: this.login.password.value,
        },
      });
      if (result.status === 200 && result.data.status) {
        // 登陆成功 存储信息
        let userInfo = {
          token: result.headers["authorization"],
          userId: this.login.userName.value,
          userName: this.login.userName.value,
        };
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        this.userInfo = userInfo;
        return;
      }
    },
    async _getLoginInfo() {
      let res = await request({
        url: "/common/userTest",
        method: "get",
        headers: {
          Authorization: this.userInfo.token,
        },
        data: {},
      });
      if (res.status === 200 && res.data.status === true) {
        return true;
      }
      return false;
    },
  },
};
</script>
<style lang="scss" scoped>
input[type="text"],
input[type="password"] {
  appearance: none;
  /* border: none; */
  outline: none;
  margin: 0;
  /* padding: 0; */
}
.login-wrapper {
  width: 100%;
  height: 100%;
}
.content {
  width: 80%;
  margin: 35px 10% 0px;
}
.horz {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 10px 0px;
  line-height: 28px;
  &-label {
    flex-shrink: 1;
    min-width: 80px;
    font-size: 16px;
    color: #666;
  }
  &-content {
    flex-shrink: 1;
    flex: 1;
    font-size: 16px;
    border: 1px #999 solid;
    border-radius: 3px;
    padding: 0px 5px;
    color: #333;
  }
}
.btns {
  display: flex;
  &-label {
    flex-shrink: 1;
    font-size: 12px;
    line-height: 32px;
    color: #999;
    margin: 0 5px;
  }
  &-submit {
    flex-shrink: 1;
    flex: 1;
    /* width: 55%; */
    /* margin-left: 110px; */
    line-height: 32px;
    text-align: center;
    background: rgba(55, 155, 195, 1);
    color: #fff;
  }
}
</style>
