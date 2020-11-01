<template>
  <table class="results-table">
    <tr v-for="row in tableData" :key="row.name" class="results-table__row">
      <td class="results-table__cell">{{ row[0] }}</td>
      <td class="results-table__cell">{{ row[1] }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "SimpleTable",

  props: {
    tableData: {
      type: Array,
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