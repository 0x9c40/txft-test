<template>
  <table class="select-table">
    <tr class="select-table-head">
      <th
        class="select-table-field"
        v-for="column in columns"
        :key="column.name"
      >
        {{ column.name }}
      </th>
    </tr>
    <tr
      class="select-table-row"
      v-for="entry in entries"
      :key="entry.legalEntityID"
      @click="selectLegalEntity(entry.legalEntityID)"
      :class="{
        'select-table-row--active':
          selectedLegalEntityID === entry.legalEntityID,
      }"
    >
      <td
        class="select-table-row__field select-table-field"
        v-for="column in columns"
        :key="column.name"
      >
        <span class="select-table-row__field--on-mobile"
          >{{ column.name }}:</span
        >
        <span v-if="column.key">{{ entry[column.key] }}</span>
        <span v-else-if="column.keys">{{
          concatenate(column.keys, entry)
        }}</span>
      </td>
    </tr>
  </table>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "SelectTable",

  props: {
    entries: {
      type: Array,
      default: () => [],
    },
    firstColumn: {
      type: Object,
      default: () => ({
        name: "firstColumnName",
      }),
    },
    columns: Array,
  },

  computed: {
    ...mapState(["selectedLegalEntityID"]),
  },

  methods: {
    ...mapActions(["selectLegalEntity"]),
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
.select-table {
  display: block;
  width: 100%;
  color: $text-color-grey;
  border-spacing: 0;
  border-top: 1px solid #eeeeee;
}

.select-table-field {
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

@mixin table-field {
  height: 36px;
  font-size: 12px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0px 10px 0px 48px;
}

.select-table-head {
  @include table-field;
  background-color: $color-secondary;
  color: white;
  text-align: left;
}

.select-table-row {
  @include table-field;
  border: 1px solid #eeeeee;
  border-top: none;
  position: relative;
  cursor: pointer;

  &:nth-child(2n + 1):not(&--active) {
    background-color: #f9f9f9;
  }

  &__field {
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

    &__field {
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