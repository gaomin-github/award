<template>
  <div class="anim-wrapper">
    <div v-for="com in comList" :key="com" @click="changeCom(com)" class="bar">
      {{ com }}
    </div>
    <div class="item">
      <transition :name="transitionName" @enter="handleEnter">
          <keep-alive>

            <component :is="curCom" class="item-con"></component>
          </keep-alive>
      </transition>
    </div>
    <!-- <div class="scroll-con" ref="scrollCon" >
        <div v-for="(item,key) in 30" :key="key" class="scroll-con-item" @click="stepTo(item)">
            this is {{item}} information test!
        </div>
    </div> -->
  </div>
</template>
<script>
import {bdTrack} from 'lib/track.js';
export default {
  data() {
    return {
      comList: ["aCom", "bCom", "cCom"],
      curCom: "aCom",
      animDuration: 0,
      transitionName: "",
      scrollTop:0,
      hmObj:null
    };
  },
  components: {
    aCom: () => import("./com/aCom.vue"),
    bCom: () => import("./com/bCom.vue"),
    cCom: () => import("./com/cCom.vue"),
  },
  mounted(){
      this._initHm()
  },
  activated(){
    //   if(this.scrollTop){
    //       this.$refs.scrollCon.scrollTo(0,this.scrollTop)
    //   }
    //   this.$refs.scrollCon.addEventListener('scroll',()=>{
    //       this.scrollTop=this.$refs.scrollCon.scrollTop;
    //   },true)
  },
  deactivated(){
    console.log(this.scrollTop,51)
  },
  methods: {
    _initHm(){
        bdTrack('pv','animTest')
    },
    changeCom(param) {
      this.curCom = param;
      bdTrack('event',['search','click',param,new Date().getTime()])
    },
    handleEnter() {
      this.transitionName = "com";
      this.animDuration = "300";
      console.log("handleEnter", 31);
    },
    stepTo(param){
        this.$router.push({
            name:'scrollTest',
            query:{
                pageIndex:param
            }
        })
    }
  },
};
</script>
<style lang="scss" scoped>
div {
  display: block;
  overflow: hidden;
}
.anim-wrapper {
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
  overflow-y:scroll;
}
.bar {
  flex-shrink: 1;
  line-height: 38px;
}
.item {
  flex-shrink: 1;
  width: 300px;
  height: 100px;
    // flex:1;
  position: relative;
}
.scroll-con{
    flex:1;
    flex-shrink: 1;
    overflow-y:scroll;
    border:1px black solid;
    margin:10px;
    &-item{
        line-height:42px;
        font-size: 18px;
    }
}
.item-con {
  position: absolute;
  width: 100%;
  height: 100%;
}
.com-enter {
  transform: translate(0, 100%);
}
.com-leave-to {
  transform: translate(0, -100%);
}
.com-enter-to,
.com-leave {
  transform: translate(0, 0);
}
.com-enter-active {
  transition: all 2s ease;
}
.com-leave-active {
  transition: all 2s ease-in;
}
</style>
