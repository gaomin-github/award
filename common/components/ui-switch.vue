<template>
  <div class="switch-wrapper" @click="handleSwitch">
    <div class="on btn" v-if="switchBool"></div>
    <div class="off btn" v-else></div>
  </div>
</template>
<script>
export default {
  props: {
    switchBool: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleSwitch() {
      this.$emit("changeStatus", !this.switchBool);
    },
  },
};
</script>
<style lang="scss" scoped>
.switch-wrapper {
  background: rgba(205, 204, 215, 1);
  display: flex;
  width: 48px;
  height: 22px;
  /* padding: 0px 5px; */
  border-radius: 10px;
  overflow: visible;
  /* position: relative; */
}
.btn {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  position: absolute;
  z-index: 100;
  /* border:1px black solid; */
  top: -2px;
}
.on {
  background: rgba(243, 99, 30, 1);
  right: -2px;
}
.off {
  background: rgba(118, 108, 148, 1);
  left: -2px;
}
</style>
