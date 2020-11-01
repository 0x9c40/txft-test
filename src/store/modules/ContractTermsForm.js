export const ContractTermsForm = {
  state: {
    step3Data: [],
  },

  mutations: {
    saveAllData(state, data) {
      state.step3Data = data;
    },
  },
};
