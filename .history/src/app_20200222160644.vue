<template>
  <section class="app">
    <!-- app.vue -->
    <router-view></router-view>
  </section>
</template>
<script>
export default {
  name: "App"
};
</script>
<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  overflow: hidden;
}
div,
section {
  display: block;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
