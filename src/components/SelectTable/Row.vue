<template>
  <tr
    class="select-table-row"
    :class="{
      'select-table-row--active': active,
    }"
  >
    <slot></slot>
  </tr>
</template>

<script>
export default {
  name: "SelectTableRow",

  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.select-table-row {
  @include table-row;
  border: 1px solid #eeeeee;
  border-top: none;
  position: relative;
  cursor: pointer;

  &:nth-child(2n + 1):not(&--active) {
    background-color: #f9f9f9;
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

  @media (max-width: 640px) {
    flex-direction: column;
    height: unset;
    align-items: flex-start;
    padding: 20px;

    &--active:before {
      background: none;
    }
  }
}
</style>