import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import legalEntities from "./static/legalentity.json";

export default new Vuex.Store({
  state: {
    legalEntities,
    selectedLegalEntityID: undefined,
  },

  getters: {},

  mutations: {
    selectLegalEntity(state, ID) {
      if (ID === state.selectedLegalEntityID) {
        state.selectedLegalEntityID = undefined;
      } else {
        state.selectedLegalEntityID = ID;
      }
    },
  },

  actions: {
    selectLegalEntity({ commit }, ID) {
      commit("selectLegalEntity", ID);
    },
  },
});
