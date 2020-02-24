<template>
  <section class="modal-wrapper">
    <ui-mask v-if="show"></ui-mask>
    <transition name="cona">
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
/* .cona-enter-active,
.cona-leave-active {
  transition: all 8s;
}
.cona-enter,
.cona-leave-to {
  transform: translateX(30px);
  background: red;
  /* opacity: 0; */
} */
section {
  display: block;
  box-sizing: border-box;
  /* width: 100%; */
}
.modal-wrapper {
  position: relative;
  top: 0px;
  bottom: 0px;
  width: 100%;
  /* z-index: -1; */
}
.modal {
  position: absolute;
  z-index: 999;
  background: #f8f8f8;
  padding: 0px 30px;
  /* height: 500px; */
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  z-index: 999;
  /* left: 50%; */
  /* top: 50%; */
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
</style>
