<template>
  <div id="app">
    <Header
      :navigationDrawerOpened="navigationDrawerOpened"
      @toggle="toggleNavigationDrawer"
    />
    <div class="main">
      <NavigationDrawer :isOpened="navigationDrawerOpened" />
      <div class="main-container">
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import NavigationDrawer from "./components/NavigationDrawer.vue";

export default {
  name: "App",

  components: {
    Header,
    NavigationDrawer,
  },

  data() {
    return {
      navigationDrawerOpened: true,
    };
  },

  methods: {
    toggleNavigationDrawer() {
      this.navigationDrawerOpened = !this.navigationDrawerOpened;
    },
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}

.main {
  position: relative;
  height: calc(100vh - #{$header-height});
  display: flex;
}

.main-sidebar {
  background-color: $color-primary;
}

.main-container {
  padding-left: $navigation-drawer-width;

  @media (max-width: 640px) {
    padding-left: 0;
  }
}
</style>
