// import Vue from "vue";
console.log("this is test_app init", 2);
// Vue.component("App", {
//   template: () => import("./test_index.vue"),
// });
import test_index from "./test_index.vue";
console.log(Vue, 3);
let vm = new Vue({
  el: "#app",
  // render: (h) => h(test_index),
  components: {
    test_index: () => import("./test_index"),
  },
  template: "<test_index/>",
  // template: "<h1>this is test_app h1</h1>",

  //   router,
  //   mock,
  //   store,
  // router: SelfRoutes
});
// vm.component("test_index", test_index);
console.log(vm, 15);
