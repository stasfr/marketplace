<template>
  <div v-if="product !== undefined">
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
    <button
      v-if="product.available === true"
      class="v-catalog-item__add_to_card_btn"
      @click="addToCart"
    >
      Buy
    </button>
    <button v-else class="v-catalog-item__add_to_card_btn" @click="SHOW_POPUP">
      Out Of Stock
    </button>
  </div>
  <v-popup>
    <template v-slot:header>Sorry</template>
    <template v-slot:message>This item is out of stock</template>
  </v-popup>
</template>

<script>
import vPopup from '@/components/v-main-wrapper/v-popup.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    vPopup
  },
  created() {
    if (!this.PRODUCTS.length) {
      this.GET_PRODUCTS_FROM_API(this.$route.params.productArticle)
    }
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
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART', 'SHOW_POPUP']),
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
