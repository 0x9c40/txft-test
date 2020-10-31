export const ContractTermsForm = {
  state: {
    contractTypeOptions: ["Charter", "Order", "Proxy", "Certificate"],
    selectedContractType: "Order",
  },

  mutations: {
    selectContractType(state, type) {
      state.selectedContractType = type;
    },
  },

  actions: {
    selectContractType({ commit }, type) {
      commit("selectContractType", type);
    },
  },
};
