<template>
  <section class="cloud-wrapper">
    cloud award
    <section class="content-pic">
      <canvas id="myCanvas" width="600" height="600">
        <ul class="pic">
          <li
            v-for="(item, key) in memberList"
            :key="key + `_` + item.phone"
            class="pic-item"
          >
            {{ item.name }}
          </li>
        </ul>
      </canvas>
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
      TagCanvas.Start("myCanvas", "", {
        textColour: null,
        initial: this._speed(),
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
<style lang="scss" scoped>
.pic {
  border: 3px red solid;
  &-item {
    style: "red";
  }
}
</style>
