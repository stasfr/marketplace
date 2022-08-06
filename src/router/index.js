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
    meta: { title: 'Home Page' }
  },
  {
    title: 'Catalog',
    name: 'catalog',
    path: '/catalog',
    component: CatalogView,
    meta: { title: 'Catalog Page' }
  },
  {
    title: 'Cart',
    name: 'cart',
    path: '/cart',
    component: CartView,
    meta: { title: 'Cart Page' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
