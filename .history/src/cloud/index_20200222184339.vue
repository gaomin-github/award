<template>
  <section class="cloud-wrapper">
    <section class="content-pic">
      <canvas ref="myCanvas" id="myCanvas" width="800" height="800"> </canvas>
      <!-- <section id="tags"> -->
      <ul class="tags" id="tags">
        <li class="tags-item" v-for="(item, key) in memberList" :key="key">
          <a href="#" target="_blank">
            {{ item.name }}
          </a>
        </li>
      </ul>
      <!-- </section> -->
    </section>
    <section class="console">
      <section
        class="console-btn"
        :class="curBtnType === btn ? 'console-btn-active' : ''"
        v-for="btn in btnTypes"
        :key="btn"
        @click="changeBtnType(btn)"
      >
        {{ btn }}
      </section>
      <section
        @click="handleAward"
        class="console-switch"
        :class="isRunning ? 'console-switch-on' : 'console-switch-off'"
      >
        {{ isRunning ? "停" : "开始" }}
      </section>
    </section>
    <ui-modal v-model="showResult">
      <section v-for="item in curResultList" :key="item.phone + item.name">
        {{ item.name }}
      </section>
    </ui-modal>
  </section>
</template>
<script>
// import "../../common/lib/tagcanvas.js";
import "TagCanvas";
export default {
  components: {
    "ui-modal": () => import("../../common/components/ui-modal.vue")
  },
  data() {
    return {
      memberList: [],
      btnTypes: [5, 10, 30],
      curBtnType: 0,
      isRunning: false,
      showResult: true,
      curResultList: []
    };
  },
  mounted() {
    this.curBtnType = this.btnTypes[0];
    this._initData();
  },
  methods: {
    _initData() {
      import("./member.js").then(res => {
        this.memberList = res.default;
        this.$nextTick(() => {
          this._initPic();
        });
      });
    },
    _initPic() {
      let canvas = this.$refs.myCanvas;
      //   console.log(`canvas`);
      //   console.log(canvas);
      TagCanvas.Start("myCanvas", "tags", {
        textColour: "#ff0000",
        initial: this._normalSpeed(),
        // outlineColour: "#ff00ff",
        reverse: true,
        // depth: 0.8,
        // maxSpeed: 0.05,
        shape: "sphere"
      });
      //   TagCanvas.Start("myCanvas", "pic", {
      //     textColour: "#ff0000",
      //     reverse: true,
      //     depth: 0.8,
      //     maxSpeed: 0.05
      //   });
    },
    _normalSpeed() {
      return [0.08 * Math.random() + 0.001, -(0.08 * Math.random() + 0.001)];
    },
    _getAward() {
      let result = this.memberList.filter((item, index) => {
        item.score = Math.random() * 100;
        return !this._getResult(item);
      });

      result
        .sort((a, b) => {
          return b.score - a.score;
        })
        .splce(0, this.curBtnType);
      // 结果存储storage
      this._storeResult(result);
      this.curResultList = result;
    },
    _storeResult(newResults) {
      let awardStorage = localStorage.getItem("award");
      let results = {};
      if (awardStorage) {
        results = JSON.parse(awardStorage);
      }
      newResults.map(item => {
        results[`${item.phone}_${item.name}`] = this.curBtnType;
      });
      localStorage.setItem(`award`, results);
    },
    _getResult(item) {
      let awardStorage = localStorage.getItem("award");
      if (awardStorage) {
        let results = JSON.parse(awardStorage);
        return results[`${item.phone}_${item.name}`];
      }
      return null;
    },
    getAllResult() {},
    changeBtnType(btn) {
      this.curBtnType = btn;
    },
    handleAward() {
      if (this.isRunning) {
        // 停止，查看抽奖结果
        let result = this._getAward();
        this.showResult = true;
        // TagCanvas.SetSpeed("myCanvas", [0, 0]);
      } else {
        // 开始抽奖
        TagCanvas.SetSpeed("myCanvas", [1, 5]);
      }
      this.isRunning = !this.isRunning;
    }
  }
};
</script>
<style lang="scss" scoped>
#myCanvas {
  width: 80%;
  /* height: 50%; */
}
.tags {
  &-item {
    border: 1px black solid;
    padding: 0px 5px;
    color: rgb(0, 0, 0);
    a {
      color: rgb(0, 0, 0);
    }
  }
}
.console {
  display: flex;
  flex-direction: row;
  &-btn,
  &-switch {
    padding: 5px 10px;
    margin: 0px 20px;
    background-color: rgba(135, 135, 135, 1);
    color: rgb(255, 255, 255);
  }
  &-btn-active {
    background-color: rgba(35, 105, 205, 0.9);
  }
  &-switch-on {
    background-color: rgba(220, 0, 0, 1);
  }
  &-switch-off {
    background-color: rgba(22, 0, 0, 1);
  }
}
</style>
