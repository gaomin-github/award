<template>
  <section class="turn-table-wrapper">
    <section class="content">
      <section class="table">
        <section class="table-row-container" @click="startPlay">
          点击抽奖
          <section class="table-row" ref="row"></section>
        </section>
      </section>
      <section class="pic"></section>
      <ui-modal v-model="showResult">
        <section v-if="resultItem.value" class="tip">
          恭喜抽中{{ resultItem.name }}
        </section>
        <section class="tip" v-else>
          谢谢惠顾
        </section>
      </ui-modal>
    </section>
  </section>
</template>
<script>
export default {
  components: {
    "ui-modal": () => import("../../common/components/ui-modal.vue")
  },
  data() {
    return {
      awards: [],
      showResult: false,
      resultItem: {},
      timerTask: null
    };
  },
  watch: {
    showResult: function(parma) {
      if (!parma) {
        this.resultItem = {};
        clearTimeout(this.timerTask);
        this.timerTask = null;

        let row = this.$refs.row;
        row.style.transition = "none";
        row.style.transform = `none`;
      }
    }
  },
  mounted() {
    document.title = "转盘抽奖";
    this._initData();
    // this._initMove();
  },
  beforeDestroy() {
    clearTimeout(this.timerTask);
    this.timerTask = null;
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
        this.awards = res.default;
      });
    },
    startPlay() {
      let row = this.$refs.row;
      row.style.transition = `all 3s ease-in-out`;
      let rotateNum = Math.floor(Math.random() * 3000);
      row.style.transform = ` rotate(${rotateNum}deg)`;
      this.timerTask = setTimeout(() => {
        this._getResult(rotateNum);
      }, 3000);
    },
    _getResult(rotateNum) {
      let pos = rotateNum % 360;
      let result = this.awards.filter((award, key) => {
        if (award.angles[0] > award.angles[1]) {
          return pos > award.angles[0] || pos <= award.angles[1];
        } else {
          return pos > award.angles[0] && pos <= award.angles[1];
        }
      });
      this.resultItem = result[0];
      this.showResult = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.turn-table-wrapper {
  /* position: relative; */
  /* padding-top: 200px; */

  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.content {
  width: 375px;
  height: 760px;
  background: url("./page_bg.png") 0 0 no-repeat;
  background-size: 100% auto;
}
.table {
  width: 100%;
  height: 365px;
  background: url("./bg.png") 2% 5% no-repeat;
  background-size: 100% auto;
  position: relative;
  &-row-container {
    position: absolute;
    z-index: 10;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 90px;
    height: 90px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px red solid;
    background-color: rgb(200, 20, 20);
    border-radius: 50%;
    border: 8px rgb(210, 210, 5) solid;
    overflow: visible;
  }
  &-row {
    width: 30px;
    height: 46px;
    z-index: 20;
    top: -10px;
    position: absolute;
    background: url("./arrow.png") 0 0 no-repeat;
    background-size: contain;
    transition: all 3s ease-in-out;
    transform-origin: bottom;
    /* transform: rotate(50deg); */
  }
}
</style>
