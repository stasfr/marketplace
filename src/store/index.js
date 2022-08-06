import { createStore } from 'vuex'

import catalogDataModule from '@/store/modules/catalogDataModule'
import cartModule from '@/store/modules/cartModule'

export default createStore({
  modules: {
    catalogDataModule,
    cartModule
  }
})
