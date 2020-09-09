<template>
  <section class="app">
    this is app wrapper
    <!-- this is vue first page test -->
    <!-- <test class="test"></test> -->

    <!-- <anim-test class="test"></anim-test> -->

    <!-- app.vue
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view> -->
  </section>
</template>
<script>
export default {
  // components: {
  // test: () => import("./test.vue"),
  // animTest: () => import("./animTest/index.vue"),
  // test1: () => import("./test1.vue"),
  // },
  name: "App",
  data() {
    return {};
  },
  mounted() {
    console.log(new Date().getTime() - performance.timing.navigationStart, 27);
  },
};
</script>
<style lang="scss">
/* @import url("https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css"); */
html,
body {
  height: 100%;
  display: block;
  box-sizing: border-box;
  overflow: hidden;
}
div,
section {
  display: block;
  box-sizing: border-box;
  /* 高德地图引入，声明hidden会隐藏高德默认ui */
  /* overflow: :hidden; */
}
.app {
  height: 100%;
  overflow: hidden;
}
.test {
  width: 100%;
  height: 600px;
}
</style>
