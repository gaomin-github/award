import Vuex from "vuex";
import Vue from "vue";
import weekly from "./modules/weekly";
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    weekly,
  },
});
