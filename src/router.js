import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import AddContract from "./views/AddContract.vue";
import Blank from "./components/Blank.vue";

const routes = [
  {
    path: "/add-contract",
    component: AddContract,
    redirect: "/add-contract/1st-step",
    children: [
      {
        path: "1st-step",
        component: () =>
          import(
            /* webpackChunkName: "contacts-list" */ "./components/Wizzard/1stStep.vue"
          ),
      },
      {
        path: "2nd-step",
        component: () =>
          import(
            /* webpackChunkName: "contacts-list" */ "./components/Wizzard/2ndStep.vue"
          ),
      },
      {
        path: "3rd-step",
        component: () =>
          import(
            /* webpackChunkName: "contacts-list" */ "./components/Wizzard/3rdStep.vue"
          ),
      },
      {
        path: "4th-step",
        component: () =>
          import(
            /* webpackChunkName: "contacts-list" */ "./components/Wizzard/4thStep.vue"
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    component: Blank,
  },
  {
    path: "/open-tasks",
    component: Blank,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
