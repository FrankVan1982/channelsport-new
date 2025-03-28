import { createRouter, createWebHistory } from 'vue-router'
const viewModules = import.meta.glob('@/views/*.vue')
const channelModules = import.meta.glob('@/views/private/channels/*.vue')
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const viewRoutes = Object.entries(viewModules).map(([path, component]) => {
  const name = path.split('/').pop()?.replace('.vue', '') || ''
  return {
    path: `/${name.toLowerCase()}`,
    name: name,
    component: component,
  }
})

const channelRoutes = Object.entries(channelModules).map(([path, component]) => {
  const name = path.split('/').pop()?.replace('.vue', '') || ''
  return {
    path: `/channels/${name.toLowerCase()}`,
    name: `channel-${name}`,
    component: component,
    meta: { requiresAuth: true }, // Tutti i canali richiedono autenticazione
  }
})

const manualRoutes = [
  { path: '/', name: 'home', component: () => import('@/views/Index.vue') },
  { path: '/sign', name: 'sign', component: () => import('@/views/Sign.vue') },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/Profile.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/private',
    name: 'private',
    component: () => import('@/views/private/Index.vue'),
    meta: { requiresAuth: true },
  },
  { path: '/terms-of-service', name: 'tos', component: () => import('@/views/TOS.vue') },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/404.vue'),
  },
]

const routes = [...viewRoutes, ...channelRoutes, ...manualRoutes]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
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
