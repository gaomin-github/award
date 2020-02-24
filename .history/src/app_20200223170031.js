import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import App from "./app.vue";
const routes = new VueRouter({
  mode: "history",
  routes: [
    // {
    //   path:'',

    // }
    {
      path: "/cloud",
      component: () => import("./cloud/index.vue")
    },
    {
      path: "/turnTable",
      component: () => import("./turn-table/index.vue")
    }
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
