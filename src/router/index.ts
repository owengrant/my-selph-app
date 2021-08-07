import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import SelphieManager from "../components/SelphieManager.vue";
import Ask from "@/components/Ask.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Ask",
    component: Ask,
  },
  {
    path: "/manager",
    name: "SelphieManager",
    component: SelphieManager,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
