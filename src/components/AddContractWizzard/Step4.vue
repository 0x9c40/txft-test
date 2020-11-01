<template>
  <div>
    <h1>4: Results</h1>

    <h2>Legal Entity</h2>
    <DataTable
      :columns="legalEntityColumnsSchema"
      :entries="selectedLegalEntity"
      class="data-table"
    />

    <h2>Pharmacies</h2>
    <DataTable
      :columns="pharmacyColumnsSchema"
      :entries="selectedPharmacies"
      class="data-table"
    />

    <h2>Contract Terms</h2>
    <ContractTermsResultsTable :contract-terms="contractTerms" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import DataTable from "../SelectTable/DataTable.vue";
import ContractTermsResultsTable from "../ContractTermsResultsTable.vue";

export default {
  name: "Step4",

  components: {
    DataTable,
    ContractTermsResultsTable,
  },

  data() {
    return {
      legalEntityColumnsSchema: [
        {
          name: "Legal Entity",
          keys: ["legalEntityName"],
        },
        {
          name: "Street",
          keys: ["address1", "address2"],
        },
        {
          name: "City",
          keys: ["city"],
        },
        {
          name: "Country",
          keys: ["country"],
        },
      ],

      pharmacyColumnsSchema: [
        {
          name: "Pharmacy",
          keys: ["pharmaName"],
        },
        {
          name: "Street",
          keys: ["address_1", "address_2"],
        },
        {
          name: "City",
          keys: ["city"],
        },
        {
          name: "Country",
          keys: ["country"],
        },
      ],
    };
  },

  computed: {
    ...mapState({
      contractTerms: (state) => state.ContractTermsForm.step3data,
    }),

    ...mapGetters(["selectedLegalEntity", "selectedPharmacies"]),
  },
};
</script>

<style lang="scss">
.data-table {
  margin-bottom: 20px;
}
</style>