import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import someting from "./static/legalentity.json";

export default new Vuex.Store({
  state: {
    someting,
  },

  getters: {},

  mutations: {},

  actions: {},
});
