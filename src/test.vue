<template>
  <div class="test-wrapper">
    <!-- this is test component1
    <img src="./testbg.png" /> -->
    <!-- <canvas id="myca1" ref="ca" class="myca"></canvas> -->
    this is test wrapper
      <div class="btn" @click="sendMsg">sendMsg</div>
      <div class="btn" @click="sendAsyncMsg">sendAsyncMsg</div>

    </div>
  </div>
</template>
<script>
  // import jsBridge from './jsBridge';
export default {
  data() {
    return {
      ws: null,
      wsStatus: false,
      testImg:require('./testbg.png')
    };
  },
  mounted() {
    console.log(
      "first screen",
      new Date().getTime() - performance.timing.navigationStart,
      15
    );

    // console.log("this is test component", 9);
    // this._initWSConn();
    // this._initCanvas()
  },
  methods: {
    async sendMsg() {
      let key = new Date().getTime();
      console.log(`sendMessage start key:${key}`);

      await jsBridge.postMessage("msgParam", `send:${key}`);
      console.log(`sendMessage   end key:${key}`);
      console.log(new Date().getTime(),38)
    },
    async sendAsyncMsg() {
      let key = new Date().getTime();
      console.log(`sendAsyncMsg start key:${key}`);

      let res=await jsBridge.postMessage("msgAsyncParam", `send:${key}`);
      console.log(`sendAsyncMsg   end key:${key}`);
      console.log(res,new Date().getTime(),48)

    },
      _initWSConn() {
        let ws = new WebSocket("ws://localhost:3003");
        ws.onopen = function(e) {
          this.wsStatus = true;
          console.log("wsStatus", this.wsStatus);
          ws.send(`client:${new Date().getTime()}`);
        };
        ws.onmessage = function(e) {
          console.log("e", 27, e.data);
        };
      },
    _initCanvas(){
      let caEl=this.$refs.ca;
      let context=caEl.getContext('2d');
      context.strokeStyle='red';
      context.fillStyle='grey';
      context.fillText('this is canvas ratio test',10,10)
      let img=new Image();
      img.src=require('./testbg.png');
      img.onload=function(){
        if(img.complete){
          context.drawImage(img,0,0,100,100)
        }
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.test-wrapper {
  width: 100%;
  min-height: 100px;
  border: 1px red solid;
  /* background: url("./testbg.png") 0 0 no-repeat; */
  background-size: 100% auto;
}
.myca{

}
.btn{
  line-height: 46px;
}
</style>
