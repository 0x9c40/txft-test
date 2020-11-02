<template>
  <div id="app">
    <Header
      :navigation-drawer-opened="navigationDrawerOpened"
      @toggle="toggleNavigationDrawer"
    />

    <div class="main">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>

    <NavigationDrawer :is-opened="navigationDrawerOpened" />
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import NavigationDrawer from "./components/layout/NavigationDrawer.vue";

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
}

body {
  font-family: sans-serif;
  font-size: 12px;
}

h1 {
  font-size: 24px;
  margin-bottom: 24px;
}

h2 {
  margin-bottom: 8px;
}

.main {
  position: relative;
  display: flex;
  padding-top: $header-height;
  padding-left: $navigation-drawer-width;
  width: 100%;

  @media (max-width: 960px) {
    padding-left: 0;
  }
}
</style>
