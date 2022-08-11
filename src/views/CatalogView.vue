<template>
  <div class="v-catalog-view__in_stock">
    <div class="title">Catalog</div>
    <v-catalog :products="products(true)" />
  </div>
  <div class="v-catalog-view__out_stock" v-if="isOutOfStock">
    <div class="title">Out Of Stock</div>
    <v-catalog :products="products(false)" />
  </div>
  <v-popup>
    <template v-slot:header>Sorry</template>
    <template v-slot:message>This item is out of stock</template>
  </v-popup>
</template>

<script>
import vCatalog from '@/components/v-catalog/v-catalog.vue'
import vPopup from '@/components/v-main-wrapper/v-popup.vue'

import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    vCatalog,
    vPopup
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'LOAD_FROM_LOCAL_STORAGE']),
    products(available) {
      return this.PRODUCTS.filter(element => element.available === available)
    }
  },
  computed: {
    ...mapGetters(['PRODUCTS']),
    isOutOfStock() {
      return this.PRODUCTS.find(element => element.available === false)
    }
  },
  mounted() {
    this.LOAD_FROM_LOCAL_STORAGE()
    this.GET_PRODUCTS_FROM_API()
  }
}
</script>
