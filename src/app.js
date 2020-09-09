import Vue from "vue";
// mock数据

// import App from "./app.vue";
// console.log(Vue, 5);
try {
  new Vue({
    el: "#app",
    components: {
      App: () => import("./app.vue"),
    },
    template: "<App/>",
  });
} catch (e) {
  console.log(e, 16);
}
