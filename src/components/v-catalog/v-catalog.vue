<template>
  <div class="container">
    <div class="v-catalog">
      <v-catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        :productData="product"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from '@/components/v-catalog/v-catalog-item.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'v-catalog',
  components: {
    vCatalogItem
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'LOAD_FROM_LOCAL_STORAGE'])
  },
  computed: {
    ...mapGetters(['PRODUCTS'])
  },
  mounted() {
    this.LOAD_FROM_LOCAL_STORAGE()
    this.GET_PRODUCTS_FROM_API()
  }
}
</script>
