import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store/index";
import mock from "./mock/index.js";
// import './axios.js';
// mock数据
// import eruda from 'eruda';

import App from "./app.vue";
Vue.use(VueRouter);
// import xianEstateDemo from './xian-estate/index.vue'
const routes = new VueRouter({
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
      path: "/xianEstateDemo",
      component: () => import("./xian-estate/index.vue"),
    },
    {
      // 西安area中的building
      name: "xianBuilding",
      path: "/xianBuilding",
      component: () => import("./xian-estate/area.vue"),
    },
    {
      name: "weeklyUser",
      path: "/weeklyUser",
      component: () => import("./weekly/index.vue"),
    },
    {
      name: "weekly",
      path: "/weekly",
      component: () => import("./weekly/weekly.vue"),
    },
    {
      name: "weeklyContent",
      path: "/weeklyContent",
      component: () => import("./weekly/content.vue"),
    },
  ],
});
console.log(`18 app.js`);
// mock数据
// import("./mock/index.js");
let vm = new Vue({
  el: "#app",
  components: {
    App: App,
  },
  template: "<App/>",
  router: routes,
  mock,
  store,
  // router: SelfRoutes
});
