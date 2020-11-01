<template>
  <table class="results-table">
    <tr class="results-table__row">
      <td class="results-table__cell">Contract Type</td>
      <td class="results-table__cell">
        {{ contractTerms.selectedContractType }}
      </td>
    </tr>
    <tr class="results-table__row">
      <td class="results-table__cell">Service Agreement #</td>
      <td class="results-table__cell">{{ contractTerms.serviceAgreement }}</td>
    </tr>
    <tr class="results-table__row">
      <td class="results-table__cell">Contract Start Date</td>
      <td class="results-table__cell">
        {{ contractTerms.contractStartDate }}
      </td>
    </tr>
    <tr class="results-table__row">
      <td class="results-table__cell">Contract End Date</td>
      <td class="results-table__cell">{{ contractTerms.contractEndDate }}</td>
    </tr>
    <tr class="results-table__row">
      <td class="results-table__cell">Location</td>
      <td class="results-table__cell">{{ contractTerms.location }}</td>
    </tr>
    <tr class="results-table__row">
      <td class="results-table__cell">Contractor Name</td>
      <td class="results-table__cell">{{ contractTerms.contractorName }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "ContractTermsResultsTable",

  props: {
    contractTerms: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.results-table {
  border-collapse: collapse;
  border: 1px solid $color-secondary;
  font-size: 12px;
  font-weight: bold;
  width: 100%;
  max-width: 400px;

  &__row {
    display: flex;
  }

  &__cell {
    padding: 4px;
    border: 1px solid $color-secondary;

    &:nth-child(1) {
      flex: 1;
    }
    &:nth-child(2) {
      flex: 2;
    }
  }
}
</style>