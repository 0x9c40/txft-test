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

<style>
</style>