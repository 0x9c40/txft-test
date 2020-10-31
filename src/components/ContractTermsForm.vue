<template>
  <form class="form">
    <div class="form-group">
      <label class="form-group__label" for="contract-type">Contract Type</label>
      <CTFormSelect :selected-option="selectedOption" :options="options" />
    </div>
    <div class="form-group">
      <label class="form-group__label" for="service-agreement">
        Service Agreement #
      </label>
      <input
        id="service-agreement"
        v-model="serviceAgreement"
        class="form-group__input"
        name="service-agreement"
        type="text"
      />
    </div>
    <div class="form-group">
      <label class="form-group__label" for="contract-start-date">
        Contract Start Date
      </label>
      <input
        id="contract-start-date"
        name="contract-start-date"
        class="form-group__input"
        type="date"
      />
    </div>
    <div class="form-group">
      <label class="form-group__label" for="contract-end-date">
        Contract End Date
      </label>
      <input
        id="contract-end-date"
        name="contract-end-date"
        class="form-group__input"
        type="date"
      />
    </div>
    <div class="form-group">
      <label class="form-group__label" for="location">Location</label>
      <input
        id="location"
        v-model="location"
        class="form-group__input form-group__input--long"
        name="location"
        type="text"
      />
    </div>
    <div class="form-group">
      <label class="form-group__label" for="contractor-name">
        Contractor Name
      </label>
      <input
        id="contractor-name"
        v-model="contractorName"
        class="form-group__input form-group__input--long"
        name="contractor-name"
        type="text"
      />
    </div>
  </form>
</template>

<script>
import { mapState } from "vuex";
import CTFormSelect from "./CTFormSelect.vue";

export default {
  name: "ContractTermsForm",

  components: {
    CTFormSelect,
  },

  data() {
    return {
      serviceAgreement: "",
      location: "",
      contractorName: "",
    };
  },

  computed: {
    ...mapState({
      selectedOption: (state) => state.ContractTermsForm.selectedContractType,
      options: (state) => state.ContractTermsForm.contractTypeOptions,
    }),
  },
};
</script>

<style lang="scss">
.form-group {
  display: flex;
  margin-bottom: 16px;
  height: 32px;
  color: $text-color-grey;
  font-size: 14px;

  &__label {
    width: 200px;
    display: flex;
    align-items: center;
    font-weight: bold;
  }

  &__select {
    padding: 0 10px;
    border-radius: 0;
  }

  &__input {
    border-radius: 0;
    border: 1px solid $color-grey;
    padding: 0 10px;

    &--long {
      width: 400px;
    }

    &:focus {
      outline: 1px solid $color-blue;
    }
  }

  &__option {
    min-height: 24px !important;
    display: block !important;
  }
}
</style>