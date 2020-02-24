<template>
  <section class="turn-table-wrapper">
    <section class="table">
      <section class="table-row"></section>
    </section>
  </section>
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
    _initMobile() {
      let oMeta = document.createElement("meta");
      oMeta.content = `width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi, viewport-fit=cover`;
      oMeta.name = "viewport";
      document.getElementsByTagName("head")[0].appendChild(oMeta);
    },
    _initData() {
      import("./award.js").then(res => {
        // console.log(res.default);
        this.awards = res.default;
      });
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
.table {
  width: 100%;
  height: 375px;
  background: url("./bg.jpeg") 0 0 no-repeat;
  background-size: auto 100%;
  position: relative;
  &-row {
    width: 36px;
    height: 40px;
    /* border: 2px red solid; */
    position: absolute;
    top: 50%;
    left: 50%;
    /* transform: translate(0, -50%); */
    background: url("./arrow.png") 0 0 no-repeat;
    background-size: auto 100%;
  }
}
</style>
