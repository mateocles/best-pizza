import Vue from "vue";
import Router from "vue-router";
import HomeLayout from "../layout/HomeLayout.vue";
import AuthLayout from "../layout/AuthLayout";
Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  mode: "history",
  routes: [
    {
      path: "/homepage",
      redirect: "home",
      component: HomeLayout,
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
