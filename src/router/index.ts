import { createRouter, createWebHistory } from 'vue-router'
import index from '@/views/Index.vue'
import login from '@/views/Login.vue'
import signup from '@/views/Signup.vue'
import privatepage from '@/views/private/Index.vue'
import profile from '@/views/Profile.vue'
import tos from '@/views/TOS.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: index,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup,
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/terms-of-service',
      name: 'tos',
      component: tos,
    },
    {
      path: '/private/',
      name: 'privatepage',
      component: privatepage,
      meta: {
        requiresAuth: true,
      },
    },
  ],
})

export default router
