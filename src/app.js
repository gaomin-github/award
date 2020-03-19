import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import App from "./app.vue";
const routes = new VueRouter({
    mode: "history",
    routes: [
        // {
        //   path: "",
        //   component: () => import("./index.vue")
        // },
        {
            path: "/cloud",
            component: () => import("./cloud/index.vue")
        },
        {
            path: "/turnTable",
            component: () => import("./turn-table/index.vue")
        },
        {
            path: "/lottieDemo",
            component: () => import("./lottieDemo/lottieComponent.vue")
        },
        {
            path: "/granulesDemo",
            component: () => import("./granules/index.vue")
        },
    ]
});
console.log(`18 app.js`);
let vm = new Vue({
    el: "#app",
    components: {
        App: App
    },
    template: "<App/>",
    router: routes
    // router: SelfRoutes
});
