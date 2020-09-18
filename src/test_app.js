// import Vue from "vue";
// console.log("this is test_app init", 2);
// console.log(Vue, 3);
// Vue.component("App", {
//   template: () => import("./test_index.vue"),
// });
// import test_index from "./test_index.vue";
import eruda from "eruda";
eruda.init();

let vm = new Vue({
  el: "#app",
  components: {
    App: () => import("./test_index.vue"),
  },
  template: "<App/>",
  // template: "<h1>this is test_app h1</h1>",

  //   router,
  //   mock,
  //   store,
  // router: SelfRoutes
});
// console.log(vm, 15);
