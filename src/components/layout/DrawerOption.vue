<template>
  <router-link
    :to="to"
    class="drawer-option"
    active-class="drawer-option--active"
  >
    <img class="drawer-option__icon" :src="imgSrc" />
    <div>{{ title }}</div>
  </router-link>
</template>

<script>
export default {
  name: "DrawerOption",

  props: {
    to: {
      type: String,
      default: "/",
    },
    imgSrc: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.drawer-option {
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-weight: bold;
  text-decoration: none;

  &__icon {
    width: 28px;
    margin-bottom: 10px;
    filter: invert(1);
  }

  &--active {
    background-color: white;
    color: $text-color-grey;
  }

  &--active &__icon {
    filter: invert(0.5);
  }
}
</style>