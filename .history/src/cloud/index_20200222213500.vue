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
      <section class="console-showall" @click="getAllResult">
        获取完整名单
      </section>
      <section class="console-clear" @click="reset">重置</section>
    </section>
    <ui-modal v-model="showResult">
      <section v-for="item in curResultList" :key="item.phone + '_'item.name">
        {{ item }}
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
      showResult: false,
      curResultList: []
    };
  },
  watch: {
    showResult: function(val) {
      if (!val) {
        TagCanvas.SetSpeed("myCanvas", this._normalSpeed());
        // TagCanvas.SetSpeed("myCanvas", [0, 0]);
      } else {
      }
    }
  },
  mounted() {
    this.curBtnType = this.btnTypes[0];
    console.log(`this.curBtnType${this.curBtnType}`);
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
      TagCanvas.Start("myCanvas", "tags", {
        textColour: "#ff0000",
        initial: this._normalSpeed(),
        reverse: true,
        shape: "sphere"
      });
    },
    _normalSpeed() {
      return [0.08 * Math.random() + 0.001, -(0.08 * Math.random() + 0.001)];
    },
    _getAward() {
      let result = this.memberList.filter((item, index) => {
        item.score = Math.random() * 100;
        return !this._getResult(item);
      });
      result = result
        .sort((a, b) => {
          return b.score - a.score;
        })
        .slice(0, this.curBtnType);
      // console.log(`result`);
      // console.log(result);

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
        item.awardType = this.curBtnType;
        results[`${item.phone}_${item.name}`] = item;
      });
      localStorage.setItem(`award`, JSON.stringify(results));
    },
    _getResult(item) {
      let awardStorage = localStorage.getItem("award");
      // console.log(`awardStorage`);

      if (awardStorage) {
        let results = JSON.parse(awardStorage);
        return results[`${item.phone}_${item.name}`];
      }
      return null;
    },
    getAllResult() {
      console.log("135,getAllResult");
      let awardStorage = localStorage.getItem("award");
      if (awardStorage) {
        let results = JSON.parse(awardStorage);
        this.curResultList = results;
        this.showResult = true;
      }
      console.log(this.curResultList);
    },
    changeBtnType(btn) {
      if (this.isRunning || this.showResult) return;
      this.curBtnType = btn;
    },
    handleAward() {
      if (this.isRunning) {
        // 停止，查看抽奖结果
        let result = this._getAward();
        this.showResult = true;
        TagCanvas.SetSpeed("myCanvas", [0, 0]);
      } else {
        this.curResultList = [];
        // 开始抽奖
        TagCanvas.SetSpeed("myCanvas", [1, 5]);
      }
      this.isRunning = !this.isRunning;
    },
    reset() {
      localStorage.removeItem("award");
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
  &-switch,
  &-showall,
  &-clear {
    padding: 5px 10px;
    margin: 0px 20px;
    background-color: rgba(135, 135, 135, 1);
    color: rgb(255, 255, 255);
    cursor: pointer;
  }
  &-showall,
  &-clear {
    background-color: rgba(22, 0, 0, 1);
  }
  &-showall-active,
  &-clear-active {
    background-color: rgba(75, 75, 75, 1);
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
