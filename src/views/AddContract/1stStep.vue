<template>
  <div class="step-1">
    <h1>1: Select Legal Entity</h1>
    <SelectTable :entries="legalEntities" />
    <router-link to="2nd-step" class="next-step-button"
      >Select Pharmacies</router-link
    >
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

  computed: {
    ...mapState(["legalEntities"]),
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
  text-decoration: none;
  font-weight: bold;
  font-size: 12px;
  margin-left: auto;
  display: block;
  width: fit-content;
}

.step-1 {
  width: 100%;
  max-width: 768px;
}
</style>