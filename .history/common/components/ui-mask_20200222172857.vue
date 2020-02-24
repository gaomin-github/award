<template>
  <section class="mask-wrapper" id="mask-wrapper"></section>
</template>
<script>
export default {
  data() {
    return {
      animation: null
    };
  },
  mounted() {
    console.log("ui mask mounted 3");
    let animation = wx.createAnimation({
      duration: 5000,
      timingFunction: "linear",
      delay: 0
      // transformOrigin: "50% 50% 0"
    });
    animation.backgroundColor("red").translate(50, 50);
    this.animation = animation.export();
    // console.log(this.animation);
    // this.animate('.mask-wrapper')
    // wx.animate(
    //     "#mask-wrapper",
    //     [
    //         {
    //             opacity: 0.5
    //         },
    //         {
    //             opacity: 0
    //         }
    //     ],
    //     5000,
    //     function() {
    //         console.log("初始化动画结束");
    //     }
    // );
  },
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
  }
};
</script>
<style lang="less" scoped>
.mask-wrapper {
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 900;
}
</style>
