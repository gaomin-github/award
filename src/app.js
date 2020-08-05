import Vue from "vue";
// mock数据

import App from "./app.vue";
let vm = new Vue({
  el: "#app",
  components: {
    App: App,
  },
  template: "<App/>",
});
