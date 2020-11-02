<template>
  <div>
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

    <PrevNextLinks
      next="step2"
      :next-step-locked="selectedLegalEntityID === undefined"
      next-label="Select Pharmacies"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import SelectTable from "../SelectTable/SelectTable.vue";
import SelectTableRow from "../SelectTable/Row.vue";
import SelectTableCell from "../SelectTable/Cell.vue";
import PrevNextLinks from "../AddContractWizzard/PrevNextLinks.vue";

export default {
  name: "Step1",

  components: {
    SelectTable,
    SelectTableRow,
    SelectTableCell,
    PrevNextLinks,
  },

  data() {
    return {
      columnsSchema: [
        {
          name: "Legal Entity",
          keys: ["legalEntityName"],
        },
        {
          name: "Street",
          keys: ["address1", "address2"],
        },
        {
          name: "City",
          keys: ["city"],
        },
        {
          name: "Country",
          keys: ["country"],
        },
      ],
    };
  },

  computed: {
    ...mapState({
      legalEntities: (state) => state.AddContractWizzard.legalEntities,
      selectedLegalEntityID: (state) =>
        state.AddContractWizzard.selectedLegalEntityID,
    }),
  },

  methods: {
    ...mapActions(["selectLegalEntity"]),
  },
};
</script>

<style>
</style>