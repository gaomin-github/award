<template>
  <section class="cloud-wrapper">
    <section class="content-pic">
      <canvas ref="myCanvas" id="myCanvas" width="800" height="800"> </canvas>
      <section id="tags">
        <ul>
          <li v-for="(item, key) in memberList" :key="key">
            <a href="#" target="_blank">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </section>
    </section>
    <section class="btn-console">
      <button v-for="btn in btnTypes"
    </section>
  </section>
</template>
<script>
// import "../../common/lib/tagcanvas.js";
import "TagCanvas";
import members from "./less_member.js";
export default {
  data() {
    return {
      memberList: [],
      btnTypes: [5, 10, 30]
    };
  },
  mounted() {
    console.log(window.TagCanvas);
    console.log(`1111`);
    console.log(window.TagCanvas.Start);
    // console.log("memberlist");
    // console.log(members);
    this._initData();
  },
  methods: {
    _initData() {
      import("./member.js").then(res => {
        this.memberList = res.default;

        console.log(`this.memberList`);
        console.log(this.memberList);
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
  width: 100%;
  /* height: 50%; */
}
.btn-console {
}
</style>
