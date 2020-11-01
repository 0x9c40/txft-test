<template>
  <div class="form-group">
    <label class="form-group__label" :for="name">
      {{ label }}
    </label>
    <slot>
      <input
        v-if="inputTypeIsDate"
        :id="name"
        :name="name"
        :type="type"
        :value="value"
        :min="min"
        class="form-group__input"
        @input="$emit('input', $event.target.value)"
        @keydown="preventManualInput"
      />
      <input
        v-else
        :id="name"
        :name="name"
        :type="type"
        :value="value"
        class="form-group__input"
        :class="{ 'form-group__input--long': longInput }"
        @input="$emit('input', $event.target.value)"
      />
    </slot>
  </div>
</template>

<script>
export default {
  name: "FormGroup",

  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: "",
    },
    longInput: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
    },
    min: {
      type: String,
      default: "",
    },
  },

  computed: {
    inputTypeIsDate() {
      return this.type === "date";
    },
  },

  methods: {
    preventManualInput(e) {
      if (e.key !== "Tab") e.preventDefault();
    },
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
    color: $text-color-grey;

    &--long {
      width: 400px;
    }

    &:focus {
      outline: 1px solid $color-blue;
    }
  }
}
</style>