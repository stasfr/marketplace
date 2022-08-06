<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
    <v-catalog-item
      v-for="product in PRODUCTS"
      :key="product.article"
      :productData="product"
    />
  </div>
</template>

<script>
import vCatalogItem from '@/components/v-catalog-item.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'v-catalog',
  components: {
    vCatalogItem
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API'])
  },
  computed: {
    ...mapGetters(['PRODUCTS'])
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }
}
</script>
