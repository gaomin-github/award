<template>
  <section ref="lottieCon" class="lottie-wrapper" :style="style"></section>
</template>
<script>
import lottie from "lottie-web";
export default {
  data() {
    return {
      remoteJsonUrl: "http://192.168.31.252:9080/lottie.json",
      style: {
        width: "100px",
        height: "100px",
        overflow: "hidden",
        margin: "0 auto"
      }
    };
  },
  mounted() {
    this._loadRemoteJson();
  },
  methods: {
    _loadRemoteJson() {
      fetch(this.remoteJsonUrl)
        .then(res => {
          return res.json();
        })
        .then(res => {
          let animObj = lottie.loadAnimation({
            container: this.$refs.lottieCon,
            renderer: "svg",
            loop: false,
            autoplay: false,
            animationData: res,
            rendererSettings: {}
          });
          this.$emit("animCreated", this.animObj);
        });
    },
    _loadLocalJson() {
      // import(/*webpackChunkName:'[request]'*/ "./demo.json").then(res => {
      //   console.log(res, 29);
      // });
    }
  }
};
</script>
<!-- <style lang="scss" scoped></style> -->
