import { createRouter, createWebHistory } from "vue-router";
import Dashbord from "../views/Dashbord.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashbord",
      component: Dashbord,
    },
    {
      path: "/transactions",
      name: "transactions",
      component: () =>
        import(
          /* webpackChunkName: "transaction" */ "../views/Transaction.vue"
        ),

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: "/categories",
      name: "categories",
      component: Dashbord,
    },
  ],
});

export default router;
