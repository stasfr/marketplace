import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import CartView from '@/views/CartView'
import CatalogView from '@/views/CatalogView'
import NotFoundView from '@/views/NotFoundView'

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
    component: CatalogView,
    meta: { title: 'Catalog', requiresCartMenu: true }
  },
  {
    title: 'Cart',
    name: 'cart',
    path: '/cart',
    component: CartView,
    meta: { title: 'Cart', requiresCartMenu: false },
    props: true
  },
  {
    path: '/:CatchAll(.*)',
    name: '404',
    component: NotFoundView,
    meta: { title: '404 not found', requiresCartMenu: true }
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
