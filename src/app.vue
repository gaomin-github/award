<template>
  <section class="app">
    <!-- app.vue -->
    <router-view></router-view>
  </section>
</template>
<script>
export default {
  name: "App",
};
</script>
<style lang="scss">
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
</style>
