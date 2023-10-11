// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'HomeView',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
      }, {
        path: 'login',
        name: 'loginView',
        component: () => import(/* webpackChunkName: "login" */ '@/views/LoginView.vue'),
      }, {
        path: 'sign',
        name: 'signView',
        component: () => import(/* webpackChunkName: "sign" */ '@/views/SignView.vue'),
      }, {
        path: 'user',
        name: 'userView',
        component: () => import(/* webpackChunkName: "users" */ '@/views/UserView.vue'),
      }, {
        path: 'admin',
        name: 'adminView',
        component: () => import(/* webpackChunkName: "users" */ '@/views/AdminView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
