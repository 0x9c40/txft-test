<template>
  <td class="select-table-cell">
    <span class="select-table-cell--on-mobile">{{ column.name }}:</span>
    <span>
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

<style lang="scss">
.select-table-cell {
  &:nth-child(1) {
    flex: 1.5;
  }

  &:nth-child(2) {
    flex: 2;
  }

  &:nth-child(3) {
    flex: 1;
  }

  &:nth-child(4) {
    flex: 1;
  }

  &--on-mobile {
    display: none;
    font-weight: bold;
  }

  @media (max-width: 640px) {
    padding-bottom: 5px;
    display: flex;

    &--on-mobile {
      display: inline;
      min-width: 100px;
    }
  }
}
</style>