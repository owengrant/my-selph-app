import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import SelphieManager from "../components/SelphieManager.vue"

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
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
