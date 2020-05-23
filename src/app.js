import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store/index";
import mock from "./mock/index.js";
// import './axios.js';
// mock数据
import eruda from "eruda";
eruda.init();
import App from "./app.vue";
Vue.use(VueRouter);
// import xianEstateDemo from './xian-estate/index.vue'
const router = new VueRouter({
  mode: "history",
  routes: [
    // {
    //   path: "",
    //   component: () => import("./index.vue")
    // },
    {
      path: "/cloud",
      component: () => import("./cloud/index.vue"),
    },
    {
      path: "/turnTable",
      component: () => import("./turn-table/index.vue"),
    },
    {
      path: "/lottieDemo",
      component: () => import("./lottieDemo/index.vue"),
    },
    {
      // 方块创建动画
      path: "/threeDemo",
      component: () => import("./threeDemo/demo1.vue"),
    },
    {
      // 模型转粒子
      path: "/granulesDemo",
      component: () => import("./granules/index.vue"),
    },
    {
      // 西安
      name: "gxEstate",
      path: "/gxEstate",
      component: () => import("./xian-estate/index.vue"),
    },
    {
      // 西安area中的building
      name: "gxBuilding",
      path: "/gxBuilding",
      component: () => import("./xian-estate/area.vue"),
    },
    {
      name: "weekly",
      path: "/weekly",
      component: () => import("./weekly/index.vue"),
    },
    {
      name: "animTest",
      path: "/animTest",
      component: () => import("./animTest/index.vue"),
    },
    // {
    //     name: "weekly",
    //     path: "/weekly",
    //     component: () => import("./weekly/weekly.vue"),
    // },
    // {
    //     name: "weeklyContent",
    //     path: "/weeklyContent",
    //     component: () => import("./weekly/content.vue"),
    // },
  ],
});

// router.beforeEach((to, from, next) => {

// })
// mock数据
// import("./mock/index.js");
let vm = new Vue({
  el: "#app",
  components: {
    App: App,
  },
  template: "<App/>",
  router,
  mock,
  store,
  // router: SelfRoutes
});
