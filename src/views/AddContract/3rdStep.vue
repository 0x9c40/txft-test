<template>
  <div class="step-3">
    <h1>3: Enter Contract Terms</h1>

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

    <div class="links links--step2">
      <router-link class="prev-step-button" to="2nd-step">Back</router-link>
      <router-link v-slot="{ navigate, href }" to="4th-step">
        <a class="next-step-button" @click="goToNextStep(navigate, href)">
          View Results
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import CTFormSelect from "../../components/ContractTermsForm/Select.vue";
import FormGroup from "../../components/ContractTermsForm/FormGroup.vue";

export default {
  components: {
    CTFormSelect,
    FormGroup,
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
      this.saveAllData(this.$data);
      // .next-step-button--locked {pointer-events: none;}
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