import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/wizzard/step-1",
  },
  {
    path: "/wizzard/step-1",
    name: "WizzardStep1",
    component: () =>
      import(
        /* webpackChunkName: "contacts-list" */ "./views/wizzard/Step_1.vue"
      ),
  },
  {
    path: "/wizzard/step-2",
    name: "WizzardStep2",
    component: () =>
      import(
        /* webpackChunkName: "edit-contact" */ "./views/wizzard/Step_2.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
