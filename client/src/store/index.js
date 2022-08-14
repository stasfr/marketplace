import { createStore } from 'vuex'

import catalogDataModule from '@/store/modules/catalogDataModule'
import cartModule from '@/store/modules/cartModule'
import popupModule from '@/store/modules/popupModule'

export default createStore({
  modules: {
    catalogDataModule,
    cartModule,
    popupModule
  }
})
