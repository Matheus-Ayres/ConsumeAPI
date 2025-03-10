import { createRouter, createWebHistory } from 'vue-router'
import CartoonsView from '../views/AllCharacters.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CartoonsView,
    },
  ],
})

export default router
