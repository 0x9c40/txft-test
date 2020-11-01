<template>
  <div
    class="navigation-drawer"
    :class="{ 'navigation-drawer--opened': isOpened }"
  >
    <DrawerOption
      to="/dashboard"
      :img-src="require('@/assets/icons/home.svg')"
      title="Dashboard"
    />
    <DrawerOption
      to="/add-contract"
      :img-src="require('@/assets/icons/copy-document.svg')"
      title="Add Contract"
    />
    <DrawerOption
      to="/open-tasks"
      :img-src="require('@/assets/icons/check.svg')"
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
  position: fixed;
  top: 0;
  height: 100%;
  padding-top: $header-height + 40px;
  width: $navigation-drawer-width;
  left: -$navigation-drawer-width;
  transition: left 0.25s;

  &--opened {
    left: 0px;
  }

  @media (max-width: 960px) {
    &--opened {
      box-shadow: 2px 0px 3px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>