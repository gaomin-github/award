<template>
  <section class="turn-table-wrapper">
    <section class="table">
      <section class="table-row-container">
        <section class="table-row" @click="startPlay" ref="row"></section>
      </section>
    </section>
    <ui-modal v-model="showResult">
      <section v-if="resultItem.value" class="tip">
        恭喜抽中{{ resultItem.name }}
      </section>
      <section class="tip" v-else>
        谢谢惠顾
      </section>
    </ui-modal>
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
  watched: {
    showResult: function(parma) {
      if (!param) {
        this.resultItem = {};
        clearTimeout(this.timerTask);
        this.timerTask = null;

        let arrow = this.$refs.row;
        row.style.transform = `rotate(0deg)`;
      }
    }
  },
  mounted() {
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
    transition: all 3s ease-in-out;
    transform-origin: bottom;
    /* transform: rotate(50deg); */
  }
}
</style>
