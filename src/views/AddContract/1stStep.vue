<template>
  <div class="step-1">
    <h1>1: Select Legal Entity</h1>
    <SelectTable :entries="legalEntities" :columns="columnsSchema" />
    <div class="links">
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
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SelectTable from "../../components/SelectTable.vue";

export default {
  name: "Step1",

  components: {
    SelectTable,
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
    goToStep2(navigate, href) {
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