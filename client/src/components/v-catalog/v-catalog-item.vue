<template>
  <div class="v-catalog-item">
    <router-link
      class="v-catalog-item__link"
      :to="{
        name: 'ProductView',
        params: {
          productArticle: productData.article,
          title: productData.name
        }
      }"
    >
      <img
        class="v-catalog-item__image"
        :src="require('@/assets/images/' + productData.image)"
        :alt="productData.image"
      />
      <div class="v-catalog-item__name">
        {{ productData.name }}
      </div>
    </router-link>

    <button
      class="v-catalog-item__add_to_card_btn"
      @click="addToCart"
      v-if="productData.available === true"
    >
      {{ productData.price }} &#8381;
    </button>

    <button v-else class="v-catalog-item__add_to_card_btn" @click="SHOW_POPUP">
      Out Of Stock
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'v-catalog-item',
  props: {
    productData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    ...mapActions(['ADD_TO_CART', 'SHOW_POPUP']),
    addToCart() {
      this.ADD_TO_CART(this.productData)
    }
  }
}
</script>
