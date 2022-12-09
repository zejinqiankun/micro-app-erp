import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/entManage',
    name: 'entManage',
    component: () => import(/* webpackChunkName: "about" */ '../views/entManage.vue')
  },
  {
    path: '/userManage',
    name: 'userManage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/userManage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: window.__POWERED_BY_QIANKUN__ ? '/app/app-erp' : process.env.BASE_URL,
  routes
})

export default router
