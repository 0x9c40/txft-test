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
}

@mixin table-cell {
  height: 36px;
  font-size: 12px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0px 10px 0px 48px;
}

.select-table-head {
  @include table-cell;
  background-color: $color-secondary;
  color: white;
  text-align: left;
}

.select-table-row {
  @include table-cell;
  border: 1px solid #eeeeee;
  border-top: none;
  position: relative;
  cursor: pointer;

  &:nth-child(2n + 1):not(&--active) {
    background-color: #f9f9f9;
  }

  &__cell {
    &--on-mobile {
      display: none;
      font-weight: bold;
    }
  }

  &--active {
    color: white;
    background-color: $color-cool;

    &:before {
      content: "";
      width: 12px;
      height: 12px;
      left: 16px;
      position: absolute;
      background-repeat: no-repeat;
      background-size: contain;
      filter: invert(1);
      background-image: url("@/assets/icons/correct-symbol.svg");
    }
  }
}

@media (max-width: 600px) {
  .select-table-head {
    display: none;
  }

  .select-table-row {
    flex-direction: column;
    height: unset;
    align-items: flex-start;
    padding: 20px;

    &__cell {
      padding-bottom: 5px;
      display: flex;

      &--on-mobile {
        display: inline;
        min-width: 100px;
      }
    }

    &--active:before {
      background: none;
    }
  }
}
</style>