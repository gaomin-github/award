import Vue from "vue";
Vue.use(VueRouter);
import VueRouter from "vue-router";
const router = new VueRouter({
  mode: "history",
  //   base: "/pages",
  routes: [
    {
      path: "/",
      redirect: "/test/a",
    },

    {
      path: "/test/a",
      component: () => import("./test.vue"),
    },
  ],
});

export default router;
