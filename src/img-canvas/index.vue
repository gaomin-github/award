<template>
  <div class="img-canvas-wrapper" ref="img-canvas">
    img canvas
    <!-- <div class="content">
      <img src="./test.png" />
    </div>-->
    <!-- <div class="btn" @click="saveMobileImg">保存移动端测试图片</div> -->
    <div class="content" ref="content">this img test</div>
    <div class="btn">
      <div class="hidden-img" ref="hidden_img">
        <img src="./test.png" />
      </div>保存测试图片
    </div>
    <!-- <div class="btn" @click="savePage">双击保存图片</div> -->
  </div>
</template>
<script>
import html2canvas from "html2canvas";
export default {
  data() {
    return {
      testImgUrl: require("./test.png")
    };
  },
  methods: {
    savePage() {
      html2canvas(document.body).then(canvas => {
        console.log(canvas, 15);
        this.$refs["img-canvas"].appendChild(canvas);
      });
    },
    saveImg() {
      let aEl = document.createElement("a");
      aEl.href = this.testImgUrl;
      aEl.download = `测试图片-${Math.round(new Date().getTime() / 1000)}`;
      let mouseE = new MouseEvent("click");
      aEl.dispatchEvent(mouseE);
    },
    saveMobileImg() {
      let blob = new Blob([""], { type: "application/octet-stream" });
      let url = URL.createObjectURL(blob);
      let aEl = document.createElement("a");
      aEl.href = this.testImgUrl;
      aEl.download = `测试图片-${Math.round(new Date().getTime() / 1000)}`;
      let mouseEl = new MouseEvent("click");
      aEl.dispatchEvent(mouseEl);
      URL.revokeObjectURL(url);
    },
    // 当前页面保存为图片下载(需兼容pc和移动端)
    _initCurrentImg() {}
  }
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
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  flex-shrink: 1;
}
.btn {
  position: relative;
  flex-shrink: 1;
  width: 80%;
  line-height: 52px;
  border-radius: 15px;
  margin: 10px 10%;
  background: rgba(55, 115, 175, 1);
  color: rgba(255, 255, 255, 1);
  border: 1px rgba(35, 95, 155, 1) solid;
  font-size: 16px;
  text-align: center;
}
.hidden-img {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  border: 1px black solid;
  left: 0;
  top: 0;
  img {
    width: 100%;
    height: 100%;
  }
}
canvas {
  position: absolute;
  top: 10px;
  width: 100px;
  height: 200px;
  border: 1px red solid;
}
</style>
