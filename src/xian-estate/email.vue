<template>
  <div class="email-wrapper">
    <div :class="`sending sending-${sendAnimation}`" v-if="sendStatus">
      <i class="fa fa-paper-plane"></i>
    </div>
    <ui-modal v-else :show="true" widthP="90%" class="email-modal" dir="center">
      <div class="close-btn" @click="$emit('handleEmail', false)">
        <i class="fa fa-plus"></i>
      </div>
      <div class="email">
        <div class="email-status">
          <i class="fa fa-envelope-o" v-if="!emailValue"></i>
          <i class="fa fa-check confirm" v-else-if="emailStatus"></i>
          <i class="fa fa-envelope-o error" aria-hidden="true" v-else></i>
        </div>
        <input
          type="text"
          :placeholder="emailPlaceHoler"
          class="email-content"
          v-model="emailValue"
          @input="handleEmailCheck"
        />
        <select class="email-type" v-model="curEmailType">
          <option v-for="(item, key) in emailType" :key="key" :value="item">
            {{ item ? item : "自定义" }}
          </option>
        </select>
        <div class="email-send" @click="sendEmail">
          <!-- <i class="fa fa-paper-plane"></i> -->
          <!-- <span>send</span> -->
          send
        </div>
      </div>
      <div class="tip">订阅后，出现最新备案价，将会发邮件提醒您哦</div>
    </ui-modal>
  </div>
</template>
<script>
import request from "request";
export default {
  components: {
    uiModal: () => import("components/ui-modal.vue"),
  },
  data() {
    return {
      emailValue: "",
      emailType: ["@qq.com", "@163.com", "@126.com", null],
      curEmailType: "@qq.com",
      emailStatus: false,
      sendStatus: false,
      sendAnimation: "",
      emailPlaceHoler: "",
    };
  },
  methods: {
    sendEmail() {
      if (!this.emailValue) {
        this.emailPlaceHoler = "邮箱不能为空";
        return;
      }
      this.sendStatus = true;
      this.sendAnimation = "circle";
      request({
        url: "/xian/subscribe",
        method: "post",
        data: {
          to: this.curEmailType
            ? this.emailValue + this.curEmailType
            : this.emailValue,
          subject: "",
        },
      }).then((res) => {
        if (res.status === 200 && res.data) {
          // 发送成功
          this.sendAnimation = "fly";
          setTimeout(() => {
            this.sendStatus = false;
            this.$emit("handleEmail", false);
          }, 1500);
        }
      });
    },
    handleEmailCheck() {
      let emailReg = null;
      if (this.emailType) {
        emailReg = new RegExp(/^[0-9a-zA-Z]+((.|-)[0-9a-zA-Z]+)+/);
      } else {
        emailReg = new RegExp(
          /^[0-9a-zA-Z]+((.|-)[0-9a-zA-Z]+)+(.|-)[a-zA-Z)-9]+.[a-zA-Z0-9]+/
        );
      }
      this.emailStatus = emailReg.test(this.emailValue);
    },
  },
};
</script>
<style lang="scss" scoped>
input,
select,
option {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background: none;
  font: none;
  appearance: none;
  -webkit-appearance: none;
}
.email-wrapper {
  background: #fff;
}

.tip {
  line-height: 36px;
  color: #666;
}

.close-btn {
  position: absolute;
  left: -10px;
  top: -10px;
  width: 30px;
  height: 26px;
  text-align: center;
  background: rgba(13, 112, 183, 0.85);
  border-radius: 50%;
  transform: rotate(45deg);
  i {
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    color: rgba(255, 255, 255, 1);
  }
}
.email {
  display: flex;
  justify-content: space-between;
  line-height: 42px;

  &-status {
    flex-shrink: 1;
    width: 24px;
    height: 30px;
    i {
      width: 100%;
      height: 100%;
      font-size: 18px;
      color: #666;
    }
    .error {
      color: rgba(205, 50, 50, 1);
    }
    .confirm {
      color: rgba(13, 112, 183, 1);
    }
  }
  &-content {
    flex: 1;
    line-height: 30px;
    padding: 0px 5px;
    margin: 5px 0px;
    font-size: 18px;
    appearance: none;
    overflow: hidden;
    border: 1px #ccc solid;
    border-radius: 5px;
    outline: none;
  }
  &-content::placeholder {
    font-size: 16px;
    color: rgba(205, 50, 50, 1);
  }
  &-type {
    flex-shrink: 1;
    width: 80px;
    padding: 0 5px;
    overflow-x: hidden;
    font-size: 16px;
    line-height: 42px;
    color: #666;
  }
  &-send {
    flex-shrink: 1;
    width: 50px;
    line-height: 32px;
    padding: 0px 8px;
    margin: 5px 0px;
    text-align: center;
    background: rgba(13, 112, 183, 1);
    border-radius: 7px;
    color: #fff;
    font-size: 16px;
    i {
      width: 100%;
      height: 100%;
      font-size: 22px;
      color: rgba(13, 112, 183, 1);
    }
  }
}
@keyframes circle {
  0% {
    transform: rotate(0deg);
    transform-origin: 0% -100%;
  }
  100% {
    transform: rotate(-360deg);
    transform-origin: 0% -100%;
  }
}
@keyframes fly_to_top {
  0% {
    transform: translate(0, 0);
    opacity: 1;
  }
  100% {
    top: -10%;
    left: 100%;
    opacity: 0;
  }
}
.sending {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 5px;
  border-radius: 10px;
  i {
    font-size: 26px;
    color: rgba(13, 112, 183, 1);
  }
}
.sending-circle {
  animation: circle 2.6s 0.3s linear infinite;
}
.sending-fly {
  animation: fly_to_top 1.6s ease-in-out;
}
</style>
