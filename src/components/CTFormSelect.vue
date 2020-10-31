<template>
  <div
    class="select"
    tabindex="0"
    @click="toggleOptions"
    @keyup.enter="toggleOptions"
  >
    <div
      class="select__preview"
      :class="{ 'select__preview--active': optionsOpened }"
    >
      {{ selectedOption }}
    </div>
    <div class="select-options-wrapper">
      <div v-show="optionsOpened" class="select-options">
        <div
          v-for="option in options"
          :key="option"
          class="select__option"
          :class="{ 'select__option--active': option === selectedOption }"
          tabindex="0"
          @click="select(option)"
          @keyup.enter.stop="select(option)"
        >
          {{ option }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CTFromSelect",

  props: ["selectedOption", "options"],

  data() {
    return {
      optionsOpened: false,
    };
  },

  methods: {
    ...mapActions(["selectContractType"]),

    toggleOptions() {
      this.optionsOpened = !this.optionsOpened;
    },

    select(option) {
      this.selectContractType(option);
      this.toggleOptions();
    },
  },
};
</script>

<style lang="scss">
.select {
  width: 128px;

  &__preview {
    border: 1px solid $color-grey;
    height: 32px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 8px;

    &:after {
      content: "🢓";
      color: black;
      display: flex;
      justify-content: center;
      background: linear-gradient(
        to bottom,
        #f2f2f2 0%,
        #ebebeb 42%,
        #dddddd 47%,
        #cfcfcf 100%
      );
      height: 100%;
      padding-top: 10px;
      width: 20px;
      box-sizing: border-box;
      border: 1px solid #707070;
    }

    &:hover,
    &--active {
      border: 1px solid $color-blue;
      box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.6);

      &:after {
        background: linear-gradient(
          to bottom,
          #eaf6fd 0%,
          #d9f0fc 42%,
          #bee6fd 47%,
          #bce5fc 58%,
          #a7d9f5 100%
        );
      }
    }
  }

  &__option {
    padding-left: 8px;
    height: 24px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &--active {
      background-color: $color-blue;
      color: white;
    }
  }
}

.select-options-wrapper {
  position: relative;
  width: 100%;
}

.select-options {
  background-color: white;
  position: absolute;
  width: 100%;
  border: 1px solid black;
  border-left: none;
  border-top: none;
  box-shadow: inset 2px 0px rgba(0, 0, 0, 0.2);
}
</style>