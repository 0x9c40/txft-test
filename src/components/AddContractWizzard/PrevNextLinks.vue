<template>
  <div class="links">
    <router-link v-if="prev" class="prev-step-button" :to="prev"
      >Back</router-link
    >
    <router-link v-if="next" v-slot="{ navigate, href }" :to="next">
      <a
        class="next-step-button"
        :class="{
          'next-step-button--locked': nextStepLocked,
        }"
        @click="goToNextStep(navigate, href)"
      >
        {{ nextLabel }}
      </a>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PrevAndNextStepLinks",

  props: {
    prev: {
      type: String,
      default: undefined,
    },

    next: {
      type: String,
      default: undefined,
    },

    nextLabel: {
      type: String,
      default: "",
    },

    goToNextStep: {
      type: Function,
      default(navigate, href) {
        navigate(href);
      },
    },

    nextStepLocked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
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
  margin-right: auto;
}

.links {
  display: flex;
  justify-content: flex-end;
  margin: 48px 0px;
}
</style>