<template>
  <div
    class="navigation-drawer"
    :class="{ 'navigation-drawer--opened': isOpened }"
  >
    <DrawerOption
      to="/dashboard"
      :imgSrc="require('@/assets/icons/home.svg')"
      title="Dashboard"
    />
    <DrawerOption
      to="/add-contract"
      :imgSrc="require('@/assets/icons/copy-document.svg')"
      title="Add Contract"
    />
    <DrawerOption
      to="/open-tasks"
      :imgSrc="require('@/assets/icons/check.svg')"
      title="Open Tasks"
    />
  </div>
</template>

<script>
import DrawerOption from "./DrawerOption.vue";
export default {
  name: "NavigationDrawer",

  components: {
    DrawerOption,
  },

  props: {
    isOpened: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss">
.navigation-drawer {
  background-color: $color-primary;
  position: absolute;
  height: 100%;
  padding-top: 64px;
  width: $navigation-drawer-width;
  left: -$navigation-drawer-width;
  transition: left 0.25s;

  &--opened {
    left: 0px;
  }
}
</style>