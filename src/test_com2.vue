<template>
  <section class="test2-wrapper">
    <section class="btn-list-item" @click="changeImportHandler">test2 import</section>
    <section class="btn-list-item" @click="changeRequireHandler">test2 require</section>

    <section class="btn-list-item" @click="jsonpReq">jsonp test</section>
    <div class="username" id="username"></div>
    <div class="userid" id="userid"></div>
    <div class="info" id="info"></div>
    <canvas class="canvas" id="canvas" width="100" height="100"></canvas>
    <canvas class="canvas1" id="canvas1" width="150" height="100"></canvas>
  </section>
</template>
<script>
// import { jsonpReqTest } from "./9_test/jsonp.js";

// import { name, data, changeName } from "./9_test/module_import.js";
// let {
//   r_name,
//   r_data,
//   r_changeName,
//   r_changeData
// } = require("./9_test/module_require.js");

export default {
  mounted() {
    // this._inituDom();
    this._initCanvas();
  },
  methods: {
    _initCanvas() {
      let canvasEl = document.getElementById("canvas");
      let context = canvasEl.getContext("2d");
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(100, 100);
      context.stroke();
      let canvasEl2 = document.getElementById("canvas1");
      let context2 = canvasEl2.getContext("2d");
      context2.beginPath();
      context2.moveTo(0, 0);
      context2.lineTo(100, 100);
      context2.stroke();
    },
    _inituDom() {
      import("./9_test/uDom.js");
    },
    webpackdistTest() {
      /*<dev>*/
      console.log("this is debug log", 22);
      /*</dev>*/
      /*<gear>*/
      console.log("this is online log", 22);
      /*</gear>*/
    },
    async jsonpReq() {
      // console.log("jsonpReqTest");
      let res = await jsonpReqTest();
      // console.log(res, 26);
    },
    changeImportHandler() {
      console.log(name, "test_com2", 18);
      console.log(r_data);
      changeName("com2");
    },
    changeRequireHandler() {
      console.log(r_name, "test_2", 25);
      console.log(r_data);

      r_changeName("com2");
      r_changeData({
        id: "test2",
        name: "test2"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.test2-wrapper {
  user-select: none;
  padding-top: 100px;
}
.btn-list-item {
  line-height: 42px;
}
.poster_bg {
  display: block;
  // width: 360px;
  // height: 400px;
  border: 1px black solid;
  // height: 500px;
}
.debuglog {
  position: absolute;
  top: 0px;
  line-height: 30px;
  font-size: 20px;
  color: red;
}
.onlinelog {
  position: absolute;
  top: 40px;
  line-height: 30px;
  font-size: 20px;
  color: green;
}
canvas {
  border: 1px red solid;
}
</style>
