<template>
  <div class="header">
    <div class="header-container">
      <div class="header-item toggle-drawer" @click="$emit('toggle')">
        <img
          v-if="navigationDrawerOpened"
          src="@/assets/icons/cross-sign.svg"
          alt="user-shape.svg"
          class="header-item__icon"
        />
        <img
          v-else
          src="@/assets/icons/menu.svg"
          alt="user-shape.svg"
          class="header-item__icon"
        />
      </div>
      <div class="header-item header__greeting">
        <img
          src="@/assets/icons/user-shape.svg"
          alt="user-shape.svg"
          class="header-item__icon"
        />
        <span> Welcome, Anil Tumati </span>
      </div>
      <div class="header-item">
        <img
          src="@/assets/icons/padlock.svg"
          alt="padlock.svg"
          class="header-item__icon"
        /><span>Logout</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",

  props: {
    navigationDrawerOpened: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss">
.header {
  position: fixed;
  width: 100%;
  z-index: 1;
  color: white;
  background-color: $color-primary;
  height: $header-height;
  display: flex;
  align-items: center;
}

.header-container {
  display: flex;
  padding-left: $navigation-drawer-width + 32px;

  @media (max-width: 960px) {
    padding-left: 10px;
  }
}

.header-item {
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-right: 48px;
  cursor: pointer;

  &__icon {
    width: 12px;
    height: 12px;
    margin-right: 8px;
    filter: invert(100%);
  }

  &:last-child {
    margin-right: 0;
  }
}

.toggle-drawer {
  margin-right: 16px;
  display: none;

  @media (max-width: 960px) {
    display: block;
  }
}
</style>