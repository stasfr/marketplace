<template>
  <div class="container">
    <div class="v-catalog">
      <v-catalog-item
        v-for="product in products"
        :key="product.article"
        :productData="product"
        :availableFilter="stockFilter"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from '@/components/v-catalog/v-catalog-item.vue'

export default {
  name: 'v-catalog',
  components: {
    vCatalogItem
  },
  props: {
    products: {
      type: Array,
      required: true
    },
    stockFilter: {
      type: Boolean,
      required: true
    }
  }
}
</script>
