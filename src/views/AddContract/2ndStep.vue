<template>
  <div class="step-1">
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
    <!-- <div class="links">
      <router-link to="2nd-step" v-slot="{ navigate, href }">
        <a
          class="next-step-button"
          :class="{
            'next-step-button--locked': selectedLegalEntityID === undefined,
          }"
          @click="goToStep2(navigate, href)"
          >Select Pharmacies</a
        >
      </router-link>
    </div> -->
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import SelectTable from "../../components/SelectTable/SelectTable.vue";
import SelectTableRow from "../../components/SelectTable/Row.vue";
import SelectTableCell from "../../components/SelectTable/Cell.vue";

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

<style>
</style>