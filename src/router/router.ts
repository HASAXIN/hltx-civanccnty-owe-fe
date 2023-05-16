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
    component: () => import("../views/officialwebsite/loginAndRegister/LoginAndRegister.vue"),
  },
  { path: "/", redirect: { name: "HomePage" } },

  {
    path: "/OweFeIndex",
    name: "OweFeIndex",
    meta: { title: "文明古国" },
    component: () => import("../views/officialwebsite/owefeindex/OweFeIndex.vue"),
    children: [
      {
        path: "/",
        name: "HomePage",
        meta: { title: "文明古国" },
        component: () => import("../views/officialwebsite/homepage/HomePage.vue"),
      },
      // {
      //   path: "/PersonalCenter",
      //   name: "PersonalCenter",
      //   meta: { title: "文明古国" },
      //   component: () => import("../views/personalcenter/PersonalCenter.vue"),
      // },
    ],
  },

];
const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
