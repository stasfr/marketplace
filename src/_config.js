export const routes = [
  {
    title: 'Home',
    name: 'home',
    path: '/',
    component: 'HomePage',
    meta: { title: 'Home Page' }
  },
  {
    title: 'Catalog',
    name: 'catalog',
    path: '/catalog',
    component: 'CatalogPage',
    meta: { title: 'Catalog Page' }
  },
  {
    title: 'Cart',
    name: 'cart',
    path: '/cart',
    component: 'CartPage',
    meta: { title: 'Cart Page' }
  }
]

export const links = [
  {
    title: 'Home',
    alias: 'home',
    url: '/'
  },
  {
    title: 'Cart',
    alias: 'cart',
    url: '/cart'
  },
  {
    title: 'Catalog',
    alias: 'catalog',
    url: '/catalog'
  }
]

export const title = 'Marketplace'
