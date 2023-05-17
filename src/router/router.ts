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
      {
        path: "/PCtrlIndex",
        name: "PCtrlIndex",
        meta: { title: "文明古国" },
        component: () => import("../views/personalcenter/pctrindex/PCtrIndex.vue"),
        children:[
          {
            path: "/PCtrOverview",
            name: "PCtrOverview",
            meta: { title: "文明古国" },
            component: () => import("../views/personalcenter/pctroverview/PCtrOverview.vue"),
          },
        ]
      },
    ],
  },

];
const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
