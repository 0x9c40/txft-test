import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import AddContract from "./views/AddContract/index.vue";
import AddContract_1stStep from "./views/AddContract/1stStep.vue";
import AddContract_2ndStep from "./views/AddContract/2ndStep.vue";
import AddContract_3rdStep from "./views/AddContract/3rdStep.vue";
import AddContract_4thStep from "./views/AddContract/4thStep.vue";

import Blank from "./views/Blank.vue";

const routes = [
  {
    path: "/add-contract",
    component: AddContract,
    redirect: "/add-contract/1st-step",
    children: [
      {
        path: "1st-step",
        component: AddContract_1stStep,
      },
      {
        path: "2nd-step",
        component: AddContract_2ndStep,
      },
      {
        path: "3rd-step",
        component: AddContract_3rdStep,
      },
      {
        path: "4th-step",
        component: AddContract_4thStep,
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
