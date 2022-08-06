import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import CartView from '@/views/CartView'
import CatalogView from '@/views/CatalogView'

const routes = [
  {
    title: 'Home',
    name: 'home',
    path: '/',
    component: HomeView,
    meta: { title: 'Home' }
  },
  {
    title: 'Catalog',
    name: 'catalog',
    path: '/catalog',
    component: CatalogView,
    meta: { title: 'Catalog' }
  },
  {
    title: 'Cart',
    name: 'cart',
    path: '/cart',
    component: CartView,
    meta: { title: 'Cart' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0)
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
