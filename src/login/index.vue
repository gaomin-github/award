<template>
  <div class="login-wrapper">
    <div class="content">
      <!-- 注册模块 -->
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
      <!-- 登陆模块 -->
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

      <div class="submit-btn" @click="submitInfo">
        {{ curCom === "reg" ? "注册" : "登陆" }}
      </div>
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
      curCom: "reg",
    };
  },
  methods: {
    changeComs(type) {
      this.curCom = type;
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
    _loginHandler() {},
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
.submit-btn {
  width: 55%;
  margin-left: 110px;
  line-height: 32px;
  text-align: center;
  background: rgba(55, 155, 195, 1);
  color: #fff;
}
</style>
