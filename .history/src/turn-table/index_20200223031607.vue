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
    _initData() {
        import("./award.js").then(res){
            console.log(res);
            // this.awards=module;
        }
    },
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
