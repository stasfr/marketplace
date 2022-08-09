import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'

const routes = [
  {
    title: 'Home',
    name: 'home',
    path: '/',
    component: HomeView,
    meta: { title: 'Home', requiresCartMenu: true }
  },
  {
    title: 'Catalog',
    name: 'catalog',
    path: '/catalog',
    component: () => import('@/views/CatalogView'),
    meta: { title: 'Catalog', requiresCartMenu: true }
  },
  {
    title: 'Cart',
    name: 'cart',
    path: '/cart',
    component: () => import('@/views/CartView'),
    meta: { title: 'Cart', requiresCartMenu: false }
  },
  {
    title: 'Product',
    name: 'ProductView',
    path: '/product/:productArticle',
    component: () => import('@/views/ProductView'),
    meta: { requiresCartMenu: true }
  },
  {
    path: '/:CatchAll(.*)',
    name: '404',
    component: () => import('@/views/NotFoundView'),
    meta: { title: '404 not found', requiresCartMenu: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.params.title ? to.params.title : to.meta.title || 'Marketplace'
  next()
})

export default router
