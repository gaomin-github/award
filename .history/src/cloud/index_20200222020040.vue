<template>
  <section class="cloud-wrapper">
    cloud award
    <section class="content-pic">
      <canvas id="myCanvas" width="300" height="300"> </canvas>
    </section>
  </section>
</template>
<script>
// import "../../common/lib/tagcanvas.js";
import "TagCanvas";
import members from "./member.js";
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
      TagCanvas.Start("myCanvas", "", {
        textColour: null,
        initial: this.speed(),
        dragControl: 1,
        textHeight: 14
      });
    },
    _speed() {
      return [0.1 * Math.random() + 0.01, -(0.1 * Math.random() + 0.01)];
    }
  }
};
</script>
