<template>
  <SelectTable :columns="columns">
    <SelectTableRow v-for="entry in entries" :key="entry.name" :entry="entry">
      <SelectTableCell
        v-for="column in columns"
        :key="column.name"
        :entry="entry"
        :column="column"
      />
    </SelectTableRow>
  </SelectTable>
</template>

<script>
import SelectTable from "./SelectTable.vue";
import SelectTableRow from "./Row.vue";
import SelectTableCell from "./Cell.vue";

export default {
  name: "DataTable",

  components: {
    SelectTable,
    SelectTableRow,
    SelectTableCell,
  },

  props: {
    columns: {
      type: Array,
      required: true,
    },
    entries: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>