export const ContractTermsForm = {
  state: {
    contractTypeOptions: ["Charter", "Order", "Proxy", "Certificate"],
    selectedContractType: "Order",
    serviceAgreement: "",
    contractStartDate: "2016-09-01",
    contractEndDate: "2020-12-32",
    location: "",
    contractorName: "",
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
