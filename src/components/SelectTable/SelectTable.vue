<template>
  <table class="select-table">
    <tr class="select-table-head">
      <th
        v-for="column in columns"
        :key="column.name"
        class="select-table-cell"
      >
        {{ column.name }}
      </th>
    </tr>
    <slot></slot>
  </table>
</template>

<script>
export default {
  name: "SelectTable",

  props: {
    columns: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.select-table {
  display: block;
  width: 100%;
  color: $text-color-grey;
  border-spacing: 0;
  border-top: 1px solid #eeeeee;
}

.select-table-head {
  @include table-row;
  background-color: $color-secondary;
  color: white;
  text-align: left;
}

@media (max-width: 640px) {
  .select-table-head {
    display: none;
  }
}
</style>