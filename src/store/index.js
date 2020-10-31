import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import legalEntities from "./static/legalentity.json";
import pharmacies from "./static/pharmacy.json";

import { ContractTermsForm } from "./modules/ContractTermsForm";

export default new Vuex.Store({
  state: {
    legalEntities,
    selectedLegalEntityID: 1,
    pharmacies,
    selectedPharmaciesIDs: [],
  },

  mutations: {
    selectLegalEntity(state, ID) {
      state.selectedPharmaciesIDs = [];

      if (ID === state.selectedLegalEntityID) {
        state.selectedLegalEntityID = undefined;
      } else {
        state.selectedLegalEntityID = ID;
      }
    },

    selectPharmacy(state, ID) {
      const index = state.selectedPharmaciesIDs.indexOf(ID);
      if (index > -1) {
        state.selectedPharmaciesIDs.splice(index, 1);
      } else {
        state.selectedPharmaciesIDs.push(ID);
      }
    },
  },

  getters: {
    pharmaciesForSelectedEntity(state) {
      return state.pharmacies.filter(function matchID(pharmacy) {
        return pharmacy.legalEntityID === state.selectedLegalEntityID;
      });
    },
  },

  actions: {
    selectLegalEntity({ commit }, ID) {
      commit("selectLegalEntity", ID);
    },

    selectPharmacy({ commit }, ID) {
      commit("selectPharmacy", ID);
    },
  },

  modules: {
    ContractTermsForm,
  },
});
