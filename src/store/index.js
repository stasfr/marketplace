import { createStore } from 'vuex'

import getCatalogData from '@/store/modules/getCatalogData'
import cartModule from '@/store/modules/cartModule'

export default createStore({
  modules: {
    getCatalogData,
    cartModule
  }
})
