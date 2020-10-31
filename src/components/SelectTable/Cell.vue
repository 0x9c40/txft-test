<template>
  <td class="select-table-row__cell select-table-cell">
    <span class="select-table-row__cell--on-mobile"> {{ column.name }}: </span>

    <span v-if="column.key">{{ entry[column.key] }}</span>
    <span v-else-if="column.keys">
      {{ concatenate(column.keys, entry) }}
    </span>
  </td>
</template>

<script>
export default {
  name: "SelectTableCell",

  props: {
    entry: {
      type: Object,
      required: true,
    },

    column: {
      type: Object,
      required: true,
    },
  },

  methods: {
    concatenate(keys, data) {
      return keys
        .reduce(function concat(acc, cur) {
          return acc + " " + data[cur];
        }, "")
        .trim();
    },
  },
};
</script>

<style>
</style>