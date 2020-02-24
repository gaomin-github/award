<template>
  <section class="turn-table-wrapper">
    <section class="table">
      <section class="table-row" @click="startPlay" ref="row"></section>
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
    startPlay() {
      let row = this.$refs.row;
      let rotateNum = Math.floor(Math.random() * 1000);
      row.cssText += `;transform:rotate(${rotateNum}deg)`;
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
    width: 35px;
    height: 0px;
    padding-top: 46px;
    /* border: 2px red solid; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -85%);
    background: url("./arrow.png") 0 0 no-repeat;
    background-size: auto 100%;
    transition: all 8s ease-in-out;
  }
}
</style>
