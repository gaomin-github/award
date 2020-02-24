<template>
  <section class="modal-wrapper">
    <ui-mask></ui-mask>
    <section class="modal modal-center">
      <section class="modal-header ">
        <section class="modal-title">{{ title }}</section>
        <section class="modal-close" @click="closeModal"></section>
      </section>
      <slot></slot>
    </section>
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
  mounted() {
    console.log("show modal----------------------");
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
  width: 100%;
}
.modal-wrapper {
  position: fixed;
  top: 0px;
  bottom: 0px;
}
.modal {
  position: absolute;
  z-index: 902;
  background: #f8f8f8;
  padding: 0px 30px;
  /* height: 500px; */
  width: 80%;
  height: 80%;
  /* left: 50%; */
  /* top: 50%; */
  &-header {
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
    width: 24px;
    height: 0px;
    padding-top: 24px;
    margin-top: 0px;
    flex-shrink: 1;
    background: url("./imgs/close_btn.png") 0 0 no-repeat;
    background-size: 100% auto;
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
