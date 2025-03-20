import { createRouter, createWebHistory } from 'vue-router'
import index from '@/views/Index.vue'
import login from '@/views/Login.vue'
import signup from '@/views/Signup.vue'
import privatepage from '@/views/private/Index.vue'
import profile from '@/views/Profile.vue'

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
    },
    {
      path: '/private/',
      name: 'privatepage',
      component: privatepage,
      meta: {
        requiresAuth: false,
      },
    },
  ],
})

export default router
