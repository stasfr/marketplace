<template>
  <div class="container" v-if="product !== undefined">
    <button @click="goBack">Catalog</button>
    <div>{{ $route.params.productArticle }}</div>
    <img
      class="v-catalog-item__image"
      :src="require('@/assets/images/' + product.image)"
      :alt="product.image"
    />
    <div>{{ product.name }}</div>
    <div>{{ product.article }}</div>
    <div>{{ product.price }} &#8381;</div>
    <div>{{ product.category }}</div>
    <div>{{ product.available }}</div>
    <button class="v-catalog-item__add_to_card_btn" @click="addToCart">
      Buy
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  created() {
    if (!this.PRODUCTS.length) {
      this.GET_PRODUCTS_FROM_API(this.$route.params.productArticle)
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['PRODUCTS']),
    product() {
      return this.PRODUCTS.find(
        element => element.article === this.$route.params.productArticle
      )
    }
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
    addToCart() {
      this.ADD_TO_CART(this.product)
    },
    goBack() {
      if (window.history.length > 2) {
        this.$router.go(-1)
      } else {
        this.$router.push({ path: '/catalog' })
      }
    }
  }
}
</script>
