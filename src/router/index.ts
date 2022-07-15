import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/mywork',
    name: 'mywork',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MyWork.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/accomplishments',
    name: 'accomplishments',
    component: () => import('../views/AccomplishmentsView.vue')
  },
  {
    path: '/mission',
    name: 'mission',
    component: () => import('../views/MissionInfoView.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('../views/ResumeView.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../views/SignInView.vue')
  },
  {
    path: '/sophia',
    name: 'sophia',
    component: () => import('../views/SophiaPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
