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
      <section class="console-btn" v-for="btn in btnTypes" :key="btn">
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
      btnTypes: [5, 10, 30]
    };
  },
  mounted() {
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
.console {
  display: flex;
  flex-direction: row;
  &-btn {
    padding: 5px 10px;
    background-color: rgba(35, 105, 205, 0.9);
    margin: 0px 20px;
  }
}
</style>
