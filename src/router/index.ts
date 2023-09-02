import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarView from '../views/CarView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/car',
    name: 'carDetail',
    component: CarView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
