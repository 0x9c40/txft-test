import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import legalEntities from "./static/legalentity.json";
import pharmacies from "./static/pharmacy.json";

import { ContractTermsForm } from "./modules/ContractTermsForm";

export default new Vuex.Store({
  state: {
    legalEntities,
    selectedLegalEntityID: undefined,
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

    selectedLegalEntity(state) {
      return state.legalEntities.filter(function matchID(legalEntity) {
        return legalEntity.legalEntityID === state.selectedLegalEntityID;
      });
    },

    selectedPharmacies(state) {
      return state.pharmacies.filter(function matchID(pharmacy) {
        return state.selectedPharmaciesIDs.includes(pharmacy.pharmaID);
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
