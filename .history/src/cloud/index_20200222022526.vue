<template>
  <section class="cloud-wrapper">
    cloud award
    <section class="content-pic">
      <canvas id="myCanvas" width="600" height="600"> </canvas>
      <section id="pic">
        <ul class="pic">
          <li
            v-for="(item, key) in memberList"
            :key="key + `_` + item.id"
            class="pic-item"
          >
            {{ item.name }}
          </li>
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
    console.log(TagCanvas);
    console.log("memberlist");
    console.log(members);
    this._initPic();
  },
  methods: {
    _initPic() {
      let canvas = this.$refs.myCanvas;
      console.log(`canvas`);
      console.log(canvas);
      TagCanvas.Start("myCanvas", "pic", {
        textColour: "#ff0000",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05
        // initial: this._speed(),
        // dragControl: 1,
        // textHeight: 14
      });
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
    style: "red";
  }
}
</style>
