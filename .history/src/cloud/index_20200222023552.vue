<template>
  <section class="cloud-wrapper">
    cloud award
    <section class="content-pic">
      <canvas ref="myCanvas" id="myCanvas" width="300" height="300"> </canvas>
      <section id="tags">
        <ul>
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
    console.log(TagCanvas.start);
    // console.log("memberlist");
    // console.log(members);
    this._initPic();
  },
  methods: {
    _initPic() {
      let canvas = this.$refs.myCanvas;
      console.log(`canvas`);
      console.log(canvas);
      TagCanvas.Start("myCanvas", "tags", {
        textColour: "#ff0000",
        outlineColour: "#ff00ff",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05
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
    style: "red";
  }
}
</style>
