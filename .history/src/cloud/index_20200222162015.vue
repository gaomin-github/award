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
      >
        {{ btn }}
      </section>
    </section>
  </section>
</template>
<script>
// import "../../common/lib/tagcanvas.js";
import "TagCanvas";
export default {
  data() {
    return {
      memberList: [],
      btnTypes: [5, 10, 30],
      curBtnType: 0
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
  &-btn {
    padding: 5px 10px;
    margin: 0px 20px;
    background-color: rgba(155, 155, 155, 0.9);
  }
  &-btn-active {
    background-color: rgba(35, 105, 205, 0.9);
  }
}
</style>
