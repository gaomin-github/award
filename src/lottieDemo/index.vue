<template>
  <section class="animate-wrapper">
    <section v-for="(item, key) in jsUrlList" :key="key">
      <lottie-component :jsUrl="item"></lottie-component>
    </section>
  </section>
</template>
<script>
import lottieComponent from "./lottieComponent.vue";
export default {
  components: {
    lottieComponent
  },
  data() {
    return {
      jsUrlList: [
        "http://192.168.31.252:9080/jsDemoA.js",
        "http://192.168.31.252:9080/jsDemoB.js",
        "http://192.168.31.252:9080/jsDemoC.js"
      ]
    };
  }
};
</script>
