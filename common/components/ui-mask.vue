<template>
  <!-- <transition name="mask"> -->
  <section
    ref="mask"
    class="mask-wrapper"
    id="mask-wrapper"
    v-if="show"
  ></section>
  <!-- </transition> -->
</template>
<script>
export default {
  data() {
    return {
      show: false,
      animation: null,
      show: false,
    };
  },
  mounted() {
    this.show = true;
  },
  attached() {
    console.log("ui-mask attached execute");
    this.animate(
      "#mask-wrapper",
      [
        {
          opacity: 0.5,
        },
        {
          opacity: 0,
        },
      ],
      5000,
      function() {
        console.log("初始化动画结束");
      }
    );
  },
  beforeDestroy() {
    let maskEle = this.$refs.mask;
    // maskEle.className += " mask-wrapper-out";
    this.show = false;
  },
};
</script>
<style lang="scss" scoped>
.mask-wrapper {
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background: rgba(0, 0, 0, 0.3);
  z-index: 900;
  /* animation: 1s opacityIn; */
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

/* .mask-enter-active,
.mask-leave-active {
  transition: opacity 8s;
}
.mask-enter,
.mask-leave-to {
  opacity: 0;
  background-color: green;
} */
</style>
