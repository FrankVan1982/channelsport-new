import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import SignedUsers from '@/views/signed-users/Index.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/signed-users/',
      name: 'signed-users',
      component: SignedUsers,
      meta: {
        requiresAuth: true,
      },
    },
  ],
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject,
    )
  })
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next()
    } else {
      console.log('You are not authenticated')
      next('/')
    }
  } else {
    next()
  }
})

export default router
