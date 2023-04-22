import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from 'vue-router'
// import {resolve} from "dns";
const routes: Array<RouteRecordRaw> = [
  // {path: '/', name: 'index', component: () => import('@/views/home/tibao/lianjie.vue')},
  {path: '/', redirect: {name: 'index'}},
  // {path: '/base', name: 'base', meta:{title:'聚发财'}, component: () => import('@/views/home/index/index.vue'),
    // children:[]}
]
const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router