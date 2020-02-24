<template>
  <section class="cloud-wrapper">
    cloud award
    <section class="content-pic">
      <canvas ref="myCanvas" id="myCanvas" width="500" height="500"> </canvas>
      <section id="tags">
        <ul>
          <li>
            <a href="http://blog.023xs.cn/Category/5" target="_blank">PHP</a>
          </li>
          <li>
            <a href="http://www.023xs.cn/Category/5" target="_blank">MySQL</a>
          </li>
          <li>
            <a href="http://blog.023xs.cn/Category/3" target="_blank">CSS3</a>
          </li>
          <li>
            <a href="http://blog.023xs.cn/Category/3" target="_blank"
              >Javascript</a
            >
          </li>
          <li>
            <a href="http://blog.023xs.cn/Category/3" target="_blank"
              >微信开发</a
            >
          </li>
          <li>
            <a href="http://blog.023xs.cn" target="_blank">Web 开发</a>
          </li>
          <!-- <li v-for="(item, key) in memberList" :key="key">
            <a href="http://blog.023xs.cn" target="_blank">{{ item.name }}</a>
          </li> -->
        </ul>
      </section>
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
      memberList: members
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
        initial: this._speed(),
        outlineColour: "#ff00ff",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        shape: "sphere"
      });
      //   TagCanvas.Start("myCanvas", "pic", {
      //     textColour: "#ff0000",
      //     reverse: true,
      //     depth: 0.8,
      //     maxSpeed: 0.05
      //   });
    },
    _speed() {
      return [0.1 * Math.random() + 0.01, -(0.1 * Math.random() + 0.01)];
    }
  }
};
</script>
<style lang="scss" scoped>
.pic {
  border: 3px red solid;
  &-item {
    /* style: "red"; */
  }
}
</style>
