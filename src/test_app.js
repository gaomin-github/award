// import Vue from "vue";
console.log("this is test_app init", 2);
console.log(Vue, 3);
// Vue.component("App", {
//   template: () => import("./test_index.vue"),
// });
import test_index from "./test_index.vue";
let vm = new Vue({
  el: "#app",
  //   components: {
  //     App,
  //   },
  //   template: "<App/>",
  template: "<h1>this is test_app h1</h1>",

  //   router,
  //   mock,
  //   store,
  // router: SelfRoutes
});
console.log(vm, 15);
