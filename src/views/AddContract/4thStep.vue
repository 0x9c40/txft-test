<template>
  <div>
    <h1>Legal Entity</h1>
    <SelectTable :columns="legalEntityColumnsSchema">
      <SelectTableRow
        v-for="entry in selectedLegalEntity"
        :key="entry.name"
        :entry="entry"
      >
        <SelectTableCell
          v-for="column in legalEntityColumnsSchema"
          :key="column.name"
          :entry="entry"
          :column="column"
        />
      </SelectTableRow>
    </SelectTable>

    <h1>Pharmacies</h1>
    <SelectTable :columns="pharmacyColumnsSchema">
      <SelectTableRow
        v-for="entry in selectedPharmacies"
        :key="entry.name"
        :entry="entry"
      >
        <SelectTableCell
          v-for="column in pharmacyColumnsSchema"
          :key="column.name"
          :entry="entry"
          :column="column"
        />
      </SelectTableRow>
    </SelectTable>

    <h1>Contract Terms</h1>
    <table class="result-table">
      <tr class="result-table__row">
        <td class="result-table__cell">Contract Type</td>
        <td class="result-table__cell">
          {{ contractTerms.selectedContractType }}
        </td>
      </tr>
      <tr class="result-table__row">
        <td class="result-table__cell">Service Agreement #</td>
        <td class="result-table__cell">{{ contractTerms.serviceAgreement }}</td>
      </tr>
      <tr class="result-table__row">
        <td class="result-table__cell">Contract Start Date</td>
        <td class="result-table__cell">
          {{ contractTerms.contractStartDate }}
        </td>
      </tr>
      <tr class="result-table__row">
        <td class="result-table__cell">Contract End Date</td>
        <td class="result-table__cell">{{ contractTerms.contractEndDate }}</td>
      </tr>
      <tr class="result-table__row">
        <td class="result-table__cell">Location</td>
        <td class="result-table__cell">{{ contractTerms.location }}</td>
      </tr>
      <tr class="result-table__row">
        <td class="result-table__cell">Contractor Name</td>
        <td class="result-table__cell">{{ contractTerms.contractorName }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import SelectTable from "../../components/SelectTable/SelectTable.vue";
import SelectTableRow from "../../components/SelectTable/Row.vue";
import SelectTableCell from "../../components/SelectTable/Cell.vue";

export default {
  name: "Step4",

  components: { SelectTable, SelectTableRow, SelectTableCell },

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
.result-table {
  border-collapse: collapse;
  border: 1px solid $color-secondary;

  &__row {
    display: flex;
  }

  &__cell {
    padding: 4px;
    border: 1px solid $color-secondary;

    &:nth-child(1) {
      width: 128px;
    }
    &:nth-child(2) {
      width: 200px;
    }
  }
}
</style>