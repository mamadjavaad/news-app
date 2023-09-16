import { createRouter, createWebHistory } from 'vue-router'
import Home from '../layouts/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home, 
      // children: [
        // { path: '', name: 'MainHome', component: () => import('../views/home/MainHome.vue') }
      // ]
    },
  ]
})

export default router
