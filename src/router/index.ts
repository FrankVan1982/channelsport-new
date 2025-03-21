import { createRouter, createWebHistory } from 'vue-router'
import index from '@/views/Index.vue'
import sign from '@/views/Sign.vue'
import privatepage from '@/views/private/Index.vue'
import profile from '@/views/Profile.vue'
import tos from '@/views/TOS.vue'
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
      path: '/sign',
      name: 'sign',
      component: sign,
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
      alert('You must be logged in to see this page')
      next('/')
    }
  } else {
    next()
  }
})
export default router
