<template>
  <div class="step-2">
    <h1>2: Select Pharmacies</h1>
    <div class="subtitle">for HERE</div>

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

    <div class="links links--step2">
      <router-link class="prev-step-button" to="step1">Back</router-link>
      <router-link v-slot="{ navigate, href }" to="step3">
        <a
          class="next-step-button"
          :class="{
            'next-step-button--locked': selectedPharmaciesIDs.length === 0,
          }"
          @click="goToNextStep(navigate, href)"
        >
          Enter Contract Terms
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import SelectTable from "../SelectTable/SelectTable.vue";
import SelectTableRow from "../SelectTable/Row.vue";
import SelectTableCell from "../SelectTable/Cell.vue";

export default {
  name: "Step2",

  components: {
    SelectTable,
    SelectTableRow,
    SelectTableCell,
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
    ...mapState(["selectedPharmaciesIDs"]),
    ...mapGetters(["pharmaciesForSelectedEntity"]),
  },

  methods: {
    ...mapActions(["selectPharmacy"]),

    goToNextStep(navigate, href) {
      // .next-step-button--locked {pointer-events: none;}
      navigate(href);
    },
  },
};
</script>

<style lang="scss">
.links {
  &--step2 {
    justify-content: space-between;
  }
}
</style>