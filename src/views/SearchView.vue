<template>
  <div class="title">Search: {{ this.$route.params.searchBody }}</div>
  <div class="title" v-if="isFound">Not Found</div>
  <v-catalog :products="searchProducts"/>
</template>

<script>
import vCatalog from '@/components/v-catalog/v-catalog.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    vCatalog
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API'])
  },
  computed: {
    ...mapGetters(['PRODUCTS']),
    isFound() {
      return !this.PRODUCTS.filter(element => element.name.includes(this.$route.params.searchBody)).length
    },
    searchProducts() {
      return this.PRODUCTS.filter(element => element.name.includes(this.$route.params.searchBody))
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }
}
</script>
