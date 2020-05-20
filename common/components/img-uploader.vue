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
        <div class="loading">
            <ui-progress :value="0.1"></ui-progress>
        </div>
    </div>
</template>
<script>
import uiProgress from './ui-progress.vue';
export default {
    components:{
        uiProgress
    },
  props: {
    imgUrl: "",
  },
data(){
    return{
        showLoading:false
    }
},
  methods: {
    chooseImg() {
      //   console.log("chooseImg");
      this.$refs.imgPicker.click();
      
    },
    changeImg(e){
        this.showLoading=true;
        // let imgs=[]
        // let imgObjs = this.$refs.imgPicker.files;
        // if (imgObjs && imgObjs.length > 0) {
        //     for (let index in imgObjs) {
        //         if (index < imgObjs.length) {
        //             (() => {
        //                 let reader = new FileReader();
        //                 let imgObj = imgObjs[index];
        //                 reader.readAsDataURL(imgObj);
        //                 reader.onload = () => {
        //                     let imgObject = {
        //                     id: Math.random(),
        //                     data: reader.result,
        //                     fileObj: imgObj,
        //                     };
        //                     this.imgs.push(imgObject);
        //                     if(this.imgs.length===imgObjs.length){
        //                         this.$emit('chooseImg',obj)
        //                     }
        //                 };
        //             })();
        //         }
        //     }
        // }
    }
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
  position:relative;
}
.loading{
    position: absolute;
    top:0px;
    bottom:0px;
    background:#999;
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
  color: #999;
  border: 1px #999 solid;
  padding-bottom: 10px;
  &:before {
    /* content: "+"; */
    display: inline;
  }
}
</style>
