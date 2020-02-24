<template>
  <section class="modal-wrapper">
    <!-- <transition name="mask" mode="in-out"> -->
    <ui-mask v-if="show"> </ui-mask>
    <!-- </transition> -->
    <transition name="content" mode="out-in">
      <section class="modal modal-center" v-if="show">
        <section class="modal-header ">
          <section class="modal-title">{{ title }}</section>
          <section class="modal-close" @click="closeModal"></section>
        </section>
        <section class="modal-content">
          <slot></slot>
        </section>
      </section>
    </transition>
  </section>
</template>
<script>
import uiMask from "./ui-mask.vue";

export default {
  props: {
    dir: {
      type: String,
      default: "bottom"
    },
    title: {
      type: String,
      default: ""
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  components: {
    uiMask
  },
  model: {
    prop: "show",
    event: "close"
  },
  methods: {
    closeModal() {
      console.log("close current modal");
      this.$emit("close", false);
      console.log(`current:${this.show}`);
    }
  }
};
</script>
<style lang="scss" scoped>
section {
  display: block;
  box-sizing: border-box;
  /* width: 100%; */
}
.modal {
  position: fixed;
  background: #f8f8f8;
  padding: 0px 30px;
  max-width: 80%;
  max-height: 80%;
  top: 50%;
  transform: translateY(50%);
  /* transform: translate(-50%, -50%); */

  display: flex;
  flex-direction: column;
  &-header {
    flex-shrink: 1;
    margin-top: 28px;
    display: flex;
  }
  &-title {
    font-size: 36px;
    color: #000000;
    height: 41px;
    line-height: 41px;
    flex: 1;
  }
  &-close {
    width: 20px;
    height: 0px;
    padding-top: 20px;
    margin-top: 0px;
    flex-shrink: 1;
    background: url("./imgs/close_btn.png") 0 0 no-repeat;
    background-size: 100% auto;
  }
  &-content {
    flex: 1;
    flex-shrink: 1;
    overflow-y: scroll;
  }
  &-content::-webkit-scrollbar {
    display: none;
  }
}
.modal-top {
  top: 0px;
}
.modal-center {
  top: 0px;
  transform: translate(10%, 10%);

  border-radius: 10px;
}
.content-enter-active,
.content-leave-active {
  transition: all 5s;
  transition-timing-function: ease-in-out;
}
.content-enter,
.content-leave-to {
  max-width: 0px;
  max-height: 0px;
}
.content-enter-to,
.content-leave {
  max-width: 80%;
  max-height: 80%;
}
</style>
