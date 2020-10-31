<template>
  <div class="step-1">
    <h1>1: Select Legal Entity</h1>
    <SelectTable :columns="columnsSchema">
      <SelectTableRow
        v-for="entry in legalEntities"
        :key="entry.name"
        :entry="entry"
        :active="selectedLegalEntityID === entry.legalEntityID"
        @click.native="selectLegalEntity(entry.legalEntityID)"
      >
        <SelectTableCell
          v-for="column in columnsSchema"
          :key="column.name"
          :entry="entry"
          :column="column"
        />
      </SelectTableRow>
    </SelectTable>
    <div class="links">
      <router-link v-slot="{ navigate, href }" to="2nd-step">
        <a
          class="next-step-button"
          :class="{
            'next-step-button--locked': selectedLegalEntityID === undefined,
          }"
          @click="goToStep2(navigate, href)"
        >
          Select Pharmacies
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import SelectTable from "../../components/SelectTable/SelectTable.vue";
import SelectTableRow from "../../components/SelectTable/Row.vue";
import SelectTableCell from "../../components/SelectTable/Cell.vue";

export default {
  name: "Step1",

  components: {
    SelectTable,
    SelectTableRow,
    SelectTableCell,
  },

  data() {
    return {
      columnsSchema: [
        {
          name: "Legal Entity",
          key: "legalEntityName",
        },
        {
          name: "Street",
          keys: ["address1", "address2"],
        },
        {
          name: "City",
          key: "city",
        },
        {
          name: "Country",
          key: "country",
        },
      ],
    };
  },

  computed: {
    ...mapState(["legalEntities", "selectedLegalEntityID"]),
  },

  methods: {
    ...mapActions(["selectLegalEntity"]),

    goToStep2(navigate, href) {
      // .next-step-button--locked {pointer-events: none;}
      navigate(href);
    },

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
h1 {
  margin-bottom: 24px;
  color: $text-color-black;
}

.next-step-button {
  background-color: $color-primary-tone;
  color: white;
  border-radius: 4px;
  padding: 8px 24px;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;

  &--locked {
    pointer-events: none;
    opacity: 0.3;
  }
}

.step-1 {
  width: 100%;
  max-width: 768px;
}

.links {
  display: flex;
  justify-content: flex-end;
  margin: 48px 0px;
}
</style>