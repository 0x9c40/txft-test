<template>
  <div>
    <h1>3: Enter Contract Terms</h1>
    <form class="form">
      <FormGroup label="Contract Type" name="contract-type">
        <Select
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

      <FormGroup
        v-model="location"
        label="Location"
        name="location"
        long-input
      />

      <FormGroup
        v-model="contractorName"
        label="Contractor Name"
        name="contractor-name"
        long-input
      />
    </form>

    <PrevNextLinks
      prev="step2"
      next="step4"
      next-label="View Results"
      :go-to-next-step="goToNextStep"
    />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Select from "../ContractTermsForm/Select.vue";
import FormGroup from "../ContractTermsForm/FormGroup.vue";
import PrevNextLinks from "../AddContractWizzard/PrevNextLinks.vue";

export default {
  name: "Step3",

  components: {
    Select,
    FormGroup,
    PrevNextLinks,
  },

  data() {
    return {
      contractTypeOptions: ["Charter", "Order", "Proxy", "Certificate"],
      selectedContractType: "Charter",
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

    goToNextStep(navigate, href) {
      const step3DataInTableFormat = [
        ["Contract Type", this.selectedContractType],
        ["Service Agreement #", this.serviceAgreement],
        ["Contract Start Date", this.contractStartDate],
        ["Contract End Date", this.contractEndDate],
        ["Location", this.location],
        ["Contractor Name", this.contractorName],
      ];
      this.saveAllData(step3DataInTableFormat);

      navigate(href);
    },

    select(option) {
      this.selectedContractType = option;
    },
  },
};
</script>

<style>
</style>