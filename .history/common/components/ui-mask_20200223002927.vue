<template>
  <section ref="mask" class="mask-wrapper" id="mask-wrapper"></section>
</template>
<script>
export default {
  data() {
    return {
      animation: null
    };
  },
  mounted() {},
  attached() {
    console.log("ui-mask attached execute");
    this.animate(
      "#mask-wrapper",
      [
        {
          opacity: 0.5
        },
        {
          opacity: 0
        }
      ],
      5000,
      function() {
        console.log("初始化动画结束");
      }
    );
  },
  beforeDestroy() {
    let maskEle = this.$refs.mask;
    console.log(maskEle);
    console.log(maskEle.ClassName);
  }
};
</script>
<style lang="scss" scoped>
.mask-wrapper {
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background: rgba(0, 0, 0, 0.8);
  z-index: 900;
  animation: 1s opacityIn;
}
.mask-wrapper-out {
  animation: 8s opacityOut;
}
@keyframes opacityIn {
  0% {
    opacity: 0;
    /* background-color: red; */
  }
  100% {
    opacity: 1;
    /* background-color: green; */
  }
}
@keyframes opacityOut {
  0% {
    opacity: 1;
    /* background-color: red; */
  }
  100% {
    opacity: 0;
    /* background-color: green; */
  }
}
</style>
