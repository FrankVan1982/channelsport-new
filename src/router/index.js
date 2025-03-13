import { createRouter, createWebHistory } from 'vue-router'
import index from '@/views/Index.vue'
import login from '@/views/Login.vue'
import register from '@/views/Register.vue'
import signedusers from '@/views/signed-users/Index.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

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
      path: '/register',
      name: 'register',
      component: register,
    },
    {
      path: '/signed-users/',
      name: 'signed-users',
      component: signedusers,
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
