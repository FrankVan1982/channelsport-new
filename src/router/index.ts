import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import SignedUsers from '../views/signed-users/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
    },
    {
      path: '/Login',
      name: 'login',
      component: Login,
    },
    {
      path: '/Register',
      name: 'register',
      component: Register,
    },
    {
      path: '/signed-users/',
      name: 'signed-users',
      component: SignedUsers,
    },
  ],
})

export default router
