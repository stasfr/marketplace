<template>
  <div class="v-catalog-item">
    <router-link
      class="v-catalog-item__link"
      :to="{
        name: 'ProductView',
        params: {
          productArticle: productData.article
        },
        meta: { title: productData.article }
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
    <button class="v-catalog-item__add_to_card_btn" @click="addToCart">
      {{ productData.price }} &#8381;
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
    ...mapActions(['ADD_TO_CART']),
    addToCart() {
      this.ADD_TO_CART(this.productData)
    }
  }
}
</script>
