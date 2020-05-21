<template>
    <div class="img-uploader-wrapper">
        <img v-if="imgUrl" :src="imgUrl" class="assess-img" />
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
        <div class="loading" v-if="showLoading">
            <ui-progress :value="loadingValue"></ui-progress>
        </div>
    </div>
</template>
<script>
import uiProgress from "./ui-progress.vue";
export default {
    components: {
        uiProgress
    },
    props: {
        imgUrl: ""
    },
    data() {
        return {
            showLoading: false,
            loadingValue: 0
        };
    },
    mounted() {},
    methods: {
        chooseImg() {
            //   console.log("chooseImg");
            this.$refs.imgPicker.click();
        },
        changeImg(e) {
            this.showLoading = true;
            let imgs = [];
            let imgObjs = this.$refs.imgPicker.files;
            if (imgObjs && imgObjs.length > 0) {
                for (let index in imgObjs) {
                    if (index < imgObjs.length) {
                        // (() => {
                        let reader = new FileReader();
                        let imgObj = imgObjs[index];
                        reader.readAsDataURL(imgObj);
                        reader.onload = () => {
                            // console.log(reader.result, 52);
                            // console.log(imgObj, 53);
                            let imgObject = {
                                id: Math.random(),
                                data: reader.result,
                                fileObj: imgObj
                            };
                            imgs.push(imgObject);
                            // console.log(imgs, 60);
                            this.loadingValue = imgs.length / imgObjs.length;
                            if (imgs.length === imgObjs.length) {
                                this.$emit("chooseImg", imgs);
                                requestAnimationFrame(() => {
                                    this.showLoading = false;
                                    this.loadingValue = 0;
                                });
                            }
                        };
                        // })();
                    }
                }
            }
        }
    }
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
.assess-img {
    display: block;
    width: 100%;
    height: 100%;
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
