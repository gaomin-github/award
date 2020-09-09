<template>
  <div class="test-wrapper">
    this is test component1
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log("this is test1 component", 9);
  },
  methods: {
    _initWSConn() {},
  },
};
</script>
<style lang="scss" scoped>
.test1-wrapper {
  width: 100%;
  min-height: 100px;
  border: 1px red solid;
  background: url("./testbg.png") 0 0 no-repeat;
  background-size: 100% auto;
}
</style>
