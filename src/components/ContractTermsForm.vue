<template>
  <form class="form">
    <FormGroup label="Contract Type" name="contract-type">
      <CTFormSelect
        :selected="selectedContractType"
        :options="contractTypeOptions"
        @select="select"
      />
    </FormGroup>

    <FormGroup
      v-model="serviceAgreement"
      label="Service Agreement #"
      name="service-agreement"
    />

    <FormGroup
      v-model="contractStartDate"
      label="Contract Start Date"
      name="contract-start-date"
      type="date"
    />

    <FormGroup
      v-model="contractEndDate"
      label="Contract End Date"
      name="contract-end-date"
      :min="contractStartDate"
      type="date"
    />

    <FormGroup v-model="location" label="Location" name="location" long-input />

    <FormGroup
      v-model="contractorName"
      label="Contractor Name"
      name="contractor-name"
      long-input
    />
  </form>
</template>

<script>
import { mapMutations } from "vuex";
import CTFormSelect from "./CTFormSelect.vue";
import FormGroup from "./ContractTermsForm/FormGroup.vue";

export default {
  name: "ContractTermsForm",

  components: {
    CTFormSelect,
    FormGroup,
  },

  data() {
    return {
      contractTypeOptions: ["Charter", "Order", "Proxy", "Certificate"],
      selectedContractType: "Order",
      serviceAgreement: "",
      location: "",
      contractorName: "",
      contractStartDate: "2020-01-01",
      contractEndDate: "2020-12-31",
    };
  },

  watch: {
    contractStartDate(val) {
      if (this.contractEndDate < val) this.contractEndDate = val;
    },
  },

  methods: {
    ...mapMutations(["saveAllData"]),

    select(option) {
      this.selectedContractType = option;
    },
  },
};
</script>

<style lang="scss">
</style>