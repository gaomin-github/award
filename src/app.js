import Vue from "vue";
import VueRouter from "vue-router";
import mock from "./mock/index.js";
// import './axios.js';
// mock数据
// import eruda from 'eruda';

Vue.use(VueRouter);
import App from "./app.vue";
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
            component: () => import('./xian-estate/index.vue'),
        },
    ],
});
console.log(`18 app.js`);
// 调试工具
// eruda.init();

let vm = new Vue({
    el: "#app",
    components: {
        App: App,
    },
    template: "<App/>",
    router: routes,
    mock
    // router: SelfRoutes
});
