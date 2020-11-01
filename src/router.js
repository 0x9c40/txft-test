import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import AddContractView from "./views/AddContract.vue";
import ACWStep1 from "./components/AddContractWizzard/Step1.vue";
import ACWStep2 from "./components/AddContractWizzard/Step2.vue";
import ACWStep3 from "./components/AddContractWizzard/Step3.vue";
import ACWStep4 from "./components/AddContractWizzard/Step4.vue";

import Blank from "./views/Blank.vue";

const routes = [
  {
    path: "/add-contract",
    component: AddContractView,
    redirect: "/add-contract/step1",
    children: [
      {
        path: "step1",
        component: ACWStep1,
      },
      {
        path: "step2",
        component: ACWStep2,
      },
      {
        path: "step3",
        component: ACWStep3,
      },
      {
        path: "step4",
        component: ACWStep4,
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
