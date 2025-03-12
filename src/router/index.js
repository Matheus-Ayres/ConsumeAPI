import { createRouter, createWebHistory } from 'vue-router'
import AllCharAvatar from '../views/AllCharacters.vue'
import CharacterAvatar from '@/views/CharacterAvatar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AllCharAvatar,
    },
    {
      path: '/Character/:id',
      name: 'Character',
      component: CharacterAvatar
    }
  ],
})

export default router
