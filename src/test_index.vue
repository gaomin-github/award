<template>
  <section class="test-wrapper">
    <!-- <section class="btn-list-item" @click="changeImportHandler">test_index import</section>
    <section class="btn-list-item" @click="changeRequireHandler">test_index require</section>-->
    <test2></test2>
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
    test2: () => import("./test_com2.vue")
  },
  mounted() {
    // console.log("test_index.vue mounted", 9);
    setTimeout(() => {
      // console.log(name, data);
    }, 1000);
  },
  methods: {
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
