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
      <router-link v-slot="{ navigate, href }" to="step2">
        <a
          class="next-step-button"
          :class="{
            'next-step-button--locked': selectedLegalEntityID === undefined,
          }"
          @click="goToNextStep(navigate, href)"
        >
          Select Pharmacies
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import SelectTable from "../SelectTable/SelectTable.vue";
import SelectTableRow from "../SelectTable/Row.vue";
import SelectTableCell from "../SelectTable/Cell.vue";

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
    ...mapState(["legalEntities", "selectedLegalEntityID"]),
  },

  methods: {
    ...mapActions(["selectLegalEntity"]),

    goToNextStep(navigate, href) {
      // .next-step-button--locked {pointer-events: none;}
      navigate(href);
    },
  },
};
</script>

<style lang="scss">
h1 {
  margin-bottom: 24px;
  color: $text-color-black;
}

@mixin step-button {
  border-radius: 4px;
  padding: 8px 24px;
  font-weight: bold;
  font-size: 12px;
  color: white;
  cursor: pointer;
  text-decoration: none;
  display: block;
  width: fit-content;
}

.next-step-button {
  @include step-button;
  background-color: $color-primary-tone;

  &--locked {
    pointer-events: none;
    opacity: 0.3;
  }
}

.prev-step-button {
  @include step-button;
  background-color: $color-grey;
}

.links {
  display: flex;
  justify-content: flex-end;
  margin: 48px 0px;
}
</style>