import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../layouts/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/main/Home.vue')
      },
      {
        path: 'settings',
        name: 'Settings',
        component: () => import('../views/main/Settings.vue')
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('../views/main/Profile.vue')
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('../views/main/Dashboard.vue')
      }
    ]
  },
  {
    path: '/auth',
    component: () => import(/* webpackChunkName: "about" */ '../layouts/Auth.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/auth/Login.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
