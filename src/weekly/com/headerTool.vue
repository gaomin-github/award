<template>
  <div class="header-tool-wrapper">
    <header class="back" @click="handleBack">
      <i :class="['fa', `fa-chevron-left`]"></i>
    </header>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  methods: {
      ...mapMutations('weekly',['popPathArr']),
    handleBack() {
        this.popPathArr()
      this.$emit("back");
    },
  },
};
</script>
<style lang="scss" scoped>
header {
  line-height: 30px;
  color: rgba(255, 255, 255, 1);
  width: 30px;
  height: 30px;
  padding-left: 5px;
  background: rgba(66, 144, 55, 1);
  box-sizing: border-box;
  border-radius: 10%;
}
</style>
