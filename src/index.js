import "core-js/stable";
import "regenerator-runtime/runtime";

import Vue from "vue";
import App from "./App.vue";

import store from "./store";
import router from "./router";

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
