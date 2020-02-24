import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import App from "./app.vue";
const routes = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/cloud",
      component: () => import("./cloud/index.vue")
    }
  ]
});
let vm = new Vue({
  el: "#app",
  components: {
    App: App
  },
  template: "<APP/>",
  router: routes
});
