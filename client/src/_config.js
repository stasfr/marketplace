// header
export const links = [
  {
    title: 'Home',
    alias: 'home',
    url: '/'
  },
  {
    title: 'Catalog',
    alias: 'catalog',
    url: '/catalog'
  }
]

export const title = 'Marketplace'

// work || prod urls
const isDev = true

export const backendUrl = isDev? 'http://localhost:3000' : 'productionUrl'
