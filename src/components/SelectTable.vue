<template>
  <table class="select-table">
    <tr class="select-table-head">
      <th class="select-table-head__field">Legal Entity</th>
      <th class="select-table-head__field">Street</th>
      <th class="select-table-head__field">City</th>
      <th class="select-table-head__field">Country</th>
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
      <td class="select-table-row__field">
        <span class="select-table-row__field--mobile">Legal Entity:</span>
        {{ entry.legalEntityName }}
      </td>
      <td class="select-table-row__field">
        <span class="select-table-row__field--mobile">Street:</span>
        {{ entry.address1 + " " + entry.address2 }}
      </td>
      <td class="select-table-row__field">
        <span class="select-table-row__field--mobile">City:</span>
        {{ entry.city }}
      </td>
      <td class="select-table-row__field">
        <span class="select-table-row__field--mobile">Country:</span>
        {{ entry.country }}
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
  },

  computed: {
    ...mapState(["selectedLegalEntityID"]),
  },

  methods: {
    ...mapActions(["selectLegalEntity"]),
  },
};
</script>

<style lang="scss">
.select-table {
  display: block;
  width: 100%;
  margin-bottom: 48px;
  color: $text-color-grey;
  border-spacing: 0;
  border-top: 1px solid #eeeeee;
}

.select-table-head {
  background-color: $color-secondary;
  color: white;
  height: 36px;
  font-size: 12px;
  display: flex;
  align-items: center;
  width: 100%;
  text-align: left;
  padding: 0px 10px 0px 48px;

  &__field {
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

  @media (max-width: 600px) {
    display: none;
  }
}

.select-table-row {
  height: 36px;
  font-size: 12px;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #eeeeee;
  border-top: none;
  position: relative;
  cursor: pointer;
  padding: 0px 10px 0px 48px;

  &:nth-child(2n + 1):not(&--active) {
    background-color: #f9f9f9;
  }

  &__field {
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

    &--mobile {
      display: none;
      font-weight: bold;

      @media (max-width: 600px) {
        display: inline;
        width: 100px;
      }
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

  @media (max-width: 600px) {
    flex-direction: column;
    height: unset;
    text-align: left;
    align-items: flex-start;
    padding: 20px;

    &__field {
      padding-bottom: 5px;
      display: flex;

      &--mobile {
        min-width: 100px;
      }
    }

    &--active {
      &:before {
        background: none;
      }
    }
  }
}
</style>