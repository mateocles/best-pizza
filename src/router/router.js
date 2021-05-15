import Vue from "vue";
import Router from "vue-router";
import DashboardLayout from "../layout/DashboardLayout.vue";
import AuthLayout from "../layout/AuthLayout";
Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  mode: "history",
  routes: [
    {
      path: "/pizzashops",
      redirect: "home",
      component: DashboardLayout,
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("@/views/private/Home.vue"),
        },
      ],
    },
    {
      path: "/",
      redirect: "login",
      component: AuthLayout,
      children: [
        {
          path: "/login",
          name: "login",
          component: () => import("@/views/public/Login.vue"),
        },
      ],
    },
  ],
});
