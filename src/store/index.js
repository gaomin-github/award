// import Vuex from "vuex";
// import Vue from "vue";
// import weekly from "./modules/weekly";
// import estate from "./modules/estate";
import rbac from "./modules/rbac";

if (process.env.NODE_ENV === "development") {
  Vue.use(Vuex);
}
export default new Vuex.Store({
  modules: {
    // weekly,
    // estate,
    rbac,
  },
});
