<template>
  <div class="v-catalog-item" v-if="availableFilter === productData.available">
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
    },
    availableFilter: {
      type: Boolean,
      required: true
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
