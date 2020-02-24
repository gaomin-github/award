<template>
  <section class="turn-table-wrapper"></section>
</template>
<script>
export default {
  data() {
    return {
      awards: []
    };
  },
  mounted() {
    this._initData();
    this._initMove();
  },
  methods: {
    _initData() {},
    _initMove() {}
  }
};
</script>
<style lang="scss" scoped>
.turn-table-wrapper {
  width: 100%;
  height: 100%;
}
</style>
