<template>
  <div class="img-uploader-wrapper">
    <img
      v-if="imgUrl"
      :src="imgUrl"
      :class="[`assess-img`, showDel ? 'assess-img-del' : ``]"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    />
    <div v-if="!imgUrl" class="assess-bg" @click="chooseImg">+</div>
    <input
      v-if="!imgUrl"
      type="file"
      accept="image/*"
      style="opacity:0"
      ref="imgPicker"
      multiple="multiple"
      @change="changeImg"
    />
    <div class="loading" v-if="!imgUrl && imgLoading">
      <ui-progress :value="loadingValue"></ui-progress>
    </div>
    <div class="del" v-if="showDel">
      <i class="icon fa fa-times" @click="handleDropFile"></i>
    </div>
  </div>
</template>
<script>
import uiProgress from "./ui-progress.vue";
const DeleteDelay = 1000;
export default {
  components: {
    uiProgress,
  },
  props: {
    imgUrl: String,
    imgLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // showLoading: false,
      loadingValue: 0,
      timerTask: null,
      touchStartTime: 0,
      showDel: false,
    };
  },
  watch: {
    imgUrl(newValue, oldValue) {
      console.log("49");
      console.log(newValue, 49);
    },
  },
  mounted() {
    // console.log(this.imgUrl, 54);
    // console.log(this.showLoading, 55);
    // // if (this.imgUrl) {
    // this.showLoading = false;
    // }
  },
  methods: {
    chooseImg() {
      this.$refs.imgPicker.click();
    },
    changeImg(e) {
      this.$emit("changeLoading", true);
      let imgs = [];
      let imgObjs = this.$refs.imgPicker.files;
      if (!imgObjs || imgObjs.length === 0) return;
      for (let index in imgObjs) {
        // if (index >= imgObjs.length) return;
        if (index < imgObjs.length) {
          //   console.log(imgObjs, 63);
          //   console.log(index, 60);
          //   console.log(imgObjs[index], 61);
          //   let reader = new FileReader();
          let imgObj = imgObjs[index];
          //   reader.readAsDataURL(imgObj);
          //   reader.onload = () => {
          let imgObject = {
            id: Math.random(),
            //   data: reader.result,
            fileObj: imgObj,
          };
          imgs.push(imgObject);
          // console.log(imgs, 60);
          this.loadingValue = imgs.length / imgObjs.length;
          if (imgs.length === imgObjs.length) {
            this.$emit("chooseImg", imgs);
            requestAnimationFrame(() => {
              // this.showLoading = false;
              this.$emit("changeImgLoading", false);

              this.loadingValue = 0;
            });
          }
          //   };
        }
      }
    },
    handleTouchStart() {
      if (!this.imgUrl) return;
      this.touchStartTime = new Date().getTime();
      // console.log("touchStart", this.touchStartTime);
      this.timerTask = setTimeout(() => {
        this.showDel = true;
        // console.log(this.showDel, 88);
      }, DeleteDelay);
    },
    handleTouchEnd() {
      // console.log("touchend", new Date().getTime());

      if (new Date().getTime() - this.touchStartTime < DeleteDelay) {
        this.showDel = false;
        clearTimeout(this.timerTask);
        this.timerTask = null;
      }
      // console.log(this.showDel, 98);
    },
    handleDropFile() {
      this.$emit("dropImg", this.imgUrl);
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css");
section,
div {
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.img-uploader-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 10px;
  overflow: visible;
}
.loading {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  padding: 0px 20px;
  background: #eee;
  border-radius: 10px;
  border: 1px #ccc solid;
  display: flex;
  align-items: center;
}
.del {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  overflow: visible !important;
  .icon {
    display: block;
    position: absolute;
    box-sizing: border-box;
    top: -30px;
    right: -30px;
    width: 65px;
    height: 55px;
    padding: 20px 20px 0px 20px;
    color: #999;
    font-size: 16px;
    font-weight: 300;
  }
}

.assess-img {
  display: block;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  // width: 70%;
  // height: 70%;
  // transform: translate(15%, 15%);
}
.assess-img-del {
  width: 80%;
  height: 80%;
  transform: translate(12%, 12%);
}
.assess-bg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  line-height: 100%;
  font-size: 50px;
  font-weight: 200;
  background: #eee;
  color: #999;
  &:before {
    /* content: "+"; */
    display: inline;
  }
}
</style>
