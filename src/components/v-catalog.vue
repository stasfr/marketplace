<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
    <vCatalogItem
      v-for="product in PRODUCTS"
      :key="product.article"
      :productData="product"
      @sendArticle="showChildArticleInConsole"
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
    ...mapActions([
      'GET_PRODUCTS_FROM_API'
    ]),
    showChildArticleInConsole(data) {
      console.log(data)
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }
}
</script>
