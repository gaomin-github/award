<template>
  <div class="img-canvas-wrapper" ref="img-canvas">
    <div class="content">
      <img src="./imgs/test.png" />
    </div>
    <!-- <div class="btn" @click="saveMobileImg">保存移动端测试图片</div> -->
    <div class="content" ref="content">
      this img test
      <div class="content-item" v-for="item in liSize" :key="item">thsi is {{item}} info test</div>
    </div>
    <div class="btn" @click="saveMobileImg">
      <!-- <div class="hidden-img">
        <img src="./test.png" ref="hidden_img" />
      </div>-->
      保存测试图片
    </div>
    <!-- <div class="btn" @click="savePage">双击保存图片</div> -->
  </div>
</template>
<script>
import html2canvas from "html2canvas";
export default {
  data() {
    return {
      liSize: 10,
      testImgUrl: require("./imgs/test.png"),
      icoUrl: require("./imgs/fav1.png")
    };
  },
  mounted() {
    this._initCurrentImg();
    document.title = "img-canvas 测试页面";
    this._initIco();
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
    _initCurrentImg() {
      html2canvas(document.body, {
        width: 375,
        height: 640,
        backgroundColor: "rgba(200,200,200,1)",
        scale: 2
      }).then(canvas => {
        // let imgData = canvas.toDataURL("image/png", 1);
        // this.$refs["hidden_img"].src = imgData;
      });
    },
    _initIco() {
      let linkEl = document.createElement("link");
      linkEl.type = "image/x-icon";
      linkEl.rel = "shortcut icon";
      linkEl.href = this.icoUrl;
      document.getElementsByTagName("head")[0].appendChild(linkEl);
    }
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
.content-item {
  line-height: 36px;
  font-size: 22px;
}
.btn {
  position: relative;
  flex-shrink: 1;
  width: 80%;
  height: 52px;
  line-height: 52px;
  border-radius: 15px;
  margin: 10px 10%;
  // background: rgba(55, 115, 175, 1);
  color: rgba(255, 255, 255, 1);
  border: 1px rgba(35, 95, 155, 1) solid;
  font-size: 16px;
  text-align: center;
}
.hidden-img {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 1;
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
