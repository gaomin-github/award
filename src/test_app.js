// import Vue from "vue";
// console.log("this is test_app init", 2);
// console.log(Vue, 3);
// Vue.component("App", {
//   template: () => import("./test_index.vue"),
// });
// import test_index from "./test_index.vue";
// import VueRouter from "vue-router";

// import eruda from "eruda";
// import VueRouter from "vue-router";
// eruda.init();
// import _ from 'lodash';
// window['_']=_
Vue.use(VueRouter)
const router = new VueRouter({
  mode: "history",
  routes: [
    // {
    //   path:'/test1',
    //   component:()=>import('./test_com1.vue')
    // },
    // {
    //       path: "/test3",
    //       component: () => import("./test_index3.vue"),
    //   }
    {
      path: "/moduleTest",
      component: () => import("./module_test/index.vue"),
  }
    ]})
let vm = new Vue({
  el: "#app",
  components: {
    ModuleTest: () => import("./module_test/index.vue")
    // App: () => import("./test_index.vue"),
  },
  template: "<Module-Test/>",

  // template: "<App/>",
  // template: "<h1>this is test_app h1</h1>",

    router,
  //   mock,
  //   store,
  // router: SelfRoutes
});
// console.log(vm, 15);
