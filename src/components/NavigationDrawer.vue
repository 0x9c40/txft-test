<template>
  <div
    class="navigation-drawer"
    :class="{ 'navigation-drawer--opened': isOpened }"
  >
    <div class="navigation-drawer__option">
      <router-link to="/wizzard/step-2">
        <div class="img">img</div>
        <div>Dashboard</div>
      </router-link>
    </div>
    <div class="navigation-drawer__option">Add Contact</div>
    <div class="navigation-drawer__option">Open Tasks</div>
  </div>
</template>

<script>
export default {
  name: "NavigationDrawer",

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
  width: $navigation-drawer-width;
  transition: left 0.3s;
  left: -$navigation-drawer-width;

  &--opened {
    left: 0px;
  }
}
</style>