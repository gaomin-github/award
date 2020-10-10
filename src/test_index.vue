<template>
  <section class="test-wrapper">
    <!-- {{ timeMsg }} -->
    <!-- <section class="btn-list-item" @click="changeImportHandler">test_index import</section>
    <section class="btn-list-item" @click="changeRequireHandler">test_index require</section>-->
    <safe-test></safe-test>
    <!-- <test2></test2> -->
  </section>
</template>
<script>
// import { name, data, changeName } from "./9_test/module_import.js";
// let {
//   r_name,
//   r_data,
//   r_changeName,
//   r_changeData
// } = require("./9_test/module_require.js");
export default {
  components: {
    test2: () => import("./test_com2.vue"),
    safeTest: () => import("./safe_test.vue")
  },
  data() {
    return {
      timeMsg: ""
    };
  },
  mounted() {
    this._initTimeMsg();
    // console.log("test_index.vue mounted", 9);
    setTimeout(() => {
      // console.log(name, data);
    }, 1000);
  },
  methods: {
    _initTimeMsg() {
      // 倒计时实现
      // 问题1:时间不够准确
      // 问题2:补0操作
      let des_data = new Date("2020-10-20T23:23:23");
      let interval = Math.floor(
        (des_data.getTime() - new Date().getTime()) / 1000
      );
      if (interval <= 0) {
        this.timeMsg = "";
        return;
      }
      // let second, min, hour;
      let second = interval % 60;
      let min = Math.floor((interval % (60 * 60)) / 60);
      let hour = Math.floor((interval % (24 * 60 * 60)) / (60 * 60));
      let day = Math.floor(interval / (24 * 60 * 60));
      this.timeMsg = `${day}天${hour}时${min}分${second}秒`;
      setTimeout(() => {
        this._initTimeMsg();
      }, 1000);
    },
    changeImportHandler() {
      console.log(name, "test_index", 18);
      changeName("com1");
    },
    changeRequireHandler() {
      console.log(r_name, "test_index", 32);
      console.log(r_data);
      r_changeName("com1");
      r_changeData({
        id: "index",
        name: "index"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.btn-list-item {
  line-height: 42px;
}
.test-wrapper {
  user-select: none;
}
</style>
