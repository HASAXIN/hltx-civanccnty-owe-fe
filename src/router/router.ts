import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
// import {resolve} from "dns";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/LoginAndRegister",
    name: "LoginAndRegister",
    meta: { title: "文明古国" },
    component: () => import("../views/loginAndRegister/LoginAndRegister.vue"),
  },
  // { path: "/", redirect: { name: "OweFeIndex" } },

  {
    path: "/www",
    name: "OweFeIndex",
    meta: { title: "文明古国" },
    component: () => import("../views/owefeindex/OweFeIndex.vue"),
    children: [
      {
        path: "/",
        name: "HomePage",
        meta: { title: "文明古国" },
        component: () => import("../views/homepage/HomePage.vue"),
      },
    ],
  },

];
const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
