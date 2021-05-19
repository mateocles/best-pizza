import Vue from "vue";
import Vuex from "vuex";
import PizzaShops from "@/store/modules/PizzaShops";
import User from "@/store/modules/User";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    PizzaShops,
    User,
  },
});
