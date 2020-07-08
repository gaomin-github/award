<template>
  <div class="img-canvas-wrapper" ref="img-canvas">
    img canvas
    <div class="btn" @click="savePage">
      双击保存图片
    </div>
  </div>
</template>
<script>
import html2canvas from "html2canvas";
export default {
  methods: {
    savePage() {
      html2canvas(document.body).then((canvas) => {
        console.log(canvas, 15);
        this.$refs["img-canvas"].appendChild(canvas);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
div,
section {
  display: block;
  overflow: hidden;
  box-sizing: border-box;
}
.img-canvas-wrapper {
  position: relative;
  height: 100%;
}
.btn {
  width: 80%;
  line-height: 52px;
  border-radius: 15px;
  position: absolute;
  bottom: 20px;
  margin: 0 10%;
  background: rgba(55, 115, 175, 1);
  color: rgba(255, 255, 255, 1);
  border: 1px rgba(35, 95, 155, 1) solid;
  font-size: 16px;
  text-align: center;
}
canvas {
  position: absolute;
  top: 10px;
  width: 100px;
  height: 200px;
  border: 1px red solid;
}
</style>
