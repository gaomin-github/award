<template>
  <section class="turn-table-wrapper">
    <section class="table">
      <section class="table-row-container">
        <section class="table-row" @click="startPlay" ref="row"></section>
      </section>
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
      let rotateNum = Math.floor(Math.random() * 3000);
      //   console.log(row);
      console.log(`rotateNum${rotateNum}`);
      //   console.log(row.style.cssText);
      //   row.style.cssText=+
      row.style.transform = ` rotate(${rotateNum}deg)`;
      this._getResult(rotateNum);
    },
    _getResult() {},
    _initMove(rotateNum) {
      let pos = rotateNum % 360;
      let result=this.awards.filter((item, key) => {
        if (awards.angles[0] > awards.angles[1]) {
          return pos > awards[0] || pos < =awards[1];
        }else{
            return pos>awards[0]&&pos<=awards[1];
        }
      });
      console.log('result');
      console.log(result);
    }
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
  &-row-container {
    position: absolute;
    z-index: 10;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 90px;
    height: 90px;
    border: 1px red solid;
    text-align: center;
    display: flex;
    justify-content: center;
  }
  &-row {
    width: 35px;
    height: 46px;
    z-index: 20;
    top: 0px;
    position: absolute;
    background: url("./arrow.png") 0 0 no-repeat;
    background-size: auto 100%;
    transition: all 2s ease-in-out;
    transform-origin: bottom;
    /* transform: rotate(50deg); */
  }
}
</style>
