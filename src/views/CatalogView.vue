<template>
  <div class="container">
    <div class="v-catalog-view__in_stock">
      <div class="title">Catalog</div>
      <v-catalog :products="PRODUCTS" :stockFilter="true" />
    </div>
    <div class="v-catalog-view__out_stock" v-if="isOutOfStock">
      <div class="title">Out Of Stock</div>
      <v-catalog :products="PRODUCTS" :stockFilter="false" />
    </div>
    <v-popup v-if="IS_POPUP_SHOW">
      <template v-slot:header>Sorry</template>
      <template v-slot:message>This item is out of stock</template>
    </v-popup>
  </div>
</template>

<script>
import vCatalog from '@/components/v-catalog/v-catalog.vue'
import vPopup from '@/components/v-popup.vue'

import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    vCatalog,
    vPopup
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'LOAD_FROM_LOCAL_STORAGE'])
  },
  computed: {
    ...mapGetters(['PRODUCTS', 'IS_POPUP_SHOW']),
    isOutOfStock() {
      return this.PRODUCTS.find(el => el.available === false)
    }
  },
  mounted() {
    this.LOAD_FROM_LOCAL_STORAGE()
    this.GET_PRODUCTS_FROM_API()
  }
}
</script>
