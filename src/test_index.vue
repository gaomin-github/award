<template>
  <section class="test-wrapper">
    <!-- <div class="swiper-container">
      <my-swiper :dataList="imgList">
        <div class="swiper-item" v-for="(item,index) in imgList" :key="index">
          <img class="swiper-item-img" :src="item.imgUrl"/>
          <div class="swiper-item-label">{{item.label}}</div>
        </div>
      </my-swiper>
    </div> -->
    <!-- <div class="list-container">
      <my-list :imgList="imgList"></my-list>
    </div> -->
    <div class="frame-container">
      <my-frame></my-frame>
    </div>
   <!-- test_index vue file
   {{configList}}
   <img src="./01.jpg"/>
   <img src="./02.png"/> -->

   <!-- {{finalMsg}} -->
    <!-- <router-view></router-view> -->
    <!-- {{ timeMsg }} -->
    <!-- <section class="btn-list-item" @click="changeImportHandler">test_index import</section>
    <section class="btn-list-item" @click="changeRequireHandler">test_index require</section>-->
    <!-- <safe-test></safe-test> -->
    <!-- <change-test></change-test> -->
    <!-- <test2></test2> -->
  </section>
</template>
<script>
  // import _ from 'lodash'
  // import{uuid} from './module_test.js'

// import { name, data, changeName } from "./9_test/module_import.js";
// let {
//   r_name,
//   r_data,
//   r_changeName,
//   r_changeData
// } = require("./9_test/module_require.js");
import configList from './test_index.config.js'
export default {
  components: {
    // test2: () => import("./test_com2.vue"),
    // safeTest: () => import("./safe_test.vue"),
    // changeTest: () => import("./change_test.vue")
    // mySwiper:()=>import("components/ui-swiper.vue"),
    // myList:()=>import("components/ui-list2.vue")
    myFrame:()=>import("./pages/iframeTest/index.vue")

  },
  data() {
    return {
      timeMsg: "this is timeMsg",
      count:1,
      imgList:[{
        imgUrl:require('./imgs/01.jpg'),
        label:'围攻1'
      },{
        imgUrl:require('./imgs/02.jpg'),
        label:'让水蛙去旅游2'
      },{
        imgUrl:require('./imgs/03.jpg'),
        label:'古剑3'
      },{
        imgUrl:require('./imgs/04.jpg'),
        label:'限时4'
      }]
    };
  },
  computed:{
    configList:function(){
      return configList;
      // let res=await import('./test_index.config.js')
      // return res&&res.default;
      // .then(res=>{
      //   console.log(res,40)
      // })

    }
  },
  mounted() {
    // console.log(_.add(3,4),36)
    // this._initTimeMsg();
    // console.log("test_index.vue mounted", 9);
    // setInterval(() => {
      // console.log('uuid',uuid,37)
      // console.log(name, data);
    //   this.count++;
    // }, 1000);
  },
  // computed:{
    // finalMsg(){
      // console.log('msg:',this.timeMsg,'count:',this.count)
  //   }
  // },
  methods: {
    getConfigList(){

    }
    // _initTimeMsg() {
    //   // 倒计时实现
    //   // 问题1:时间不够准确
    //   // 问题2:补0操作
    //   let des_data = new Date("2020-10-20T23:23:23");
    //   let interval = Math.floor(
    //     (des_data.getTime() - new Date().getTime()) / 1000
    //   );
    //   if (interval <= 0) {
    //     this.timeMsg = "";
    //     return;
    //   }
    //   // let second, min, hour;
    //   let second = interval % 60;
    //   let min = Math.floor((interval % (60 * 60)) / 60);
    //   let hour = Math.floor((interval % (24 * 60 * 60)) / (60 * 60));
    //   let day = Math.floor(interval / (24 * 60 * 60));
    //   this.timeMsg = `${day}天${hour}时${min}分${second}秒`;
    //   setTimeout(() => {
    //     this._initTimeMsg();
    //   }, 1000);
    // },
    // changeImportHandler() {
    //   console.log(name, "test_index", 18);
    //   changeName("com1");
    // },
    // changeRequireHandler() {
    //   console.log(r_name, "test_index", 32);
    //   console.log(r_data);
    //   r_changeName("com1");
    //   r_changeData({
    //     id: "index",
    //     name: "index"
    //   });
    // }
  }
};
</script>
<style lang="scss">
  div{
    box-sizing: border-box;
    overflow: hidden;
  }
.btn-list-item {
  line-height: 42px;
}
.test-wrapper {
  user-select: none;
}
.swiper-container{
  width:100%;
  height:550px;
  overflow: hidden;
  /* padding:0px 30px; */

}
.list-container{
  width:100%;
  height:500px;
  /* overflow: hidden; */
}
.swiper-item{
  width:100%;
  height:100%;
  &-img{
    width:100%;
  }
  &-label{
    line-height: 32px;
  }
}
</style>
