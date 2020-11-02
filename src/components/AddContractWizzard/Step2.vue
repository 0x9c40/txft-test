<template>
  <div>
    <h1>
      2: Select Pharmacies
      <span class="subtitle">for {{ selectedLegalEntityName }}</span>
    </h1>

    <SelectTable :columns="columnsSchema">
      <SelectTableRow
        v-for="entry in pharmaciesForSelectedEntity"
        :key="entry.name"
        :entry="entry"
        :active="selectedPharmaciesIDs.includes(entry.pharmaID)"
        @click.native="selectPharmacy(entry.pharmaID)"
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
      prev="step1"
      next="step3"
      :next-step-locked="selectedPharmaciesIDs.length === 0"
      next-label="Enter Contract Terms"
    />
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import SelectTable from "../SelectTable/SelectTable.vue";
import SelectTableRow from "../SelectTable/Row.vue";
import SelectTableCell from "../SelectTable/Cell.vue";
import PrevNextLinks from "../AddContractWizzard/PrevNextLinks.vue";

export default {
  name: "Step2",

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
          name: "Pharmacy",
          keys: ["pharmaName"],
        },
        {
          name: "Street",
          keys: ["address_1", "address_2"],
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
      selectedPharmaciesIDs: (state) =>
        state.AddContractWizzard.selectedPharmaciesIDs,
    }),
    ...mapGetters(["pharmaciesForSelectedEntity", "selectedLegalEntity"]),

    selectedLegalEntityName() {
      return (
        this.selectedLegalEntity && this.selectedLegalEntity.legalEntityName
      );
    },
  },

  methods: {
    ...mapActions(["selectPharmacy"]),
  },
};
</script>

<style lang="scss">
.subtitle {
  font-size: 14px;
  font-weight: normal;
}
</style>