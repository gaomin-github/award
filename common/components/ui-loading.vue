<template>
  <div class="loading-wrapper">
    <div class="img-con">
      <img :src="imgUrl" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imgUrl: {
      type: String,
      default: () => {
        return require("./imgs/loading.png");
      },
    },
  },
};
</script>
<style lang="scss" scoped>
@keyframes load_circle {
  0% {
    /* transform: translateX(-50%); */

    /* transform: scale(1, 1); */
    transform: rotate(0deg);
  }
  100% {
    /* transform: translateX(-50%); */
    transform: scale(1, 1);
    transform: rotate(360deg);
  }
}
@keyframes load_vertical {
  0% {
    /* transform: scale(1, 1); */
  }
  50% {
    width: 110%;
    height: 110%;
    transform: translateY(-20px);
  }
  100% {
    /* transform: scale(1, 1); */
  }
}
.loading-wrapper {
  width: 100%;
  height: 100%;
  /* transform: translateY(-30px); */
  position: relative;
  overflow: visible;
  /* transform: scale(3, 3); */
  img {
    animation: load_vertical 0.6s linear infinite;
    width: 100%;
    height: 100%;
    position: absolute;
    /* left: 50%; */
  }
}
</style>
