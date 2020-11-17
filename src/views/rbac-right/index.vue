<template>
  <div class="right-wrapper">
    <component :is="activeTab"></component>
  </div>
</template>
<script>
export default {
  components: {
    addRight: () => import("./coms/add-right.vue"),
    rightIndex: () => import("./coms/right-index.vue"),
    updateRight: () => import("./coms/update-right.vue")
  },
  data() {
    return {
      activeTab: "right-index"
    };
  }
};
</script>
<style lang="scss" scoped>
.right-wrapper {
  width: 100%;
  height: 100%;
}
</style>