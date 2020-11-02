import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { ContractTermsForm } from "./modules/ContractTermsForm";
import { AddContractWizzard } from "./modules/AddContractWizzard";

export default new Vuex.Store({
  modules: {
    AddContractWizzard,
    ContractTermsForm,
  },
});
