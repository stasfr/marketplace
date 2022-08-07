<template>
  <div class="v-cart-item">
    <img
      class="v-cart-item__image"
      :src="require('@/assets/images/' + productCartData.image)"
      :alt="productCartData.image"
    />
    <div class="v-cart-item__info">
      <div>{{ productCartData.name }}</div>
      <div>{{ productCartData.article }}</div>
      <div>{{ productCartData.price }} &#8381;</div>
    </div>
    <div class="v-cart-item__quantity">
      Quantity: {{ productCartData.quantity }}
    </div>
    <button class="v-cart-item__btn" @click="deleteFromCart(productCartData.article)">Remove</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'v-cart-item',
  props: {
    productCartData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    ...mapGetters(['CART'])
  },
  methods: {
    ...mapActions(['DELETE_FROM_CART']),
    deleteFromCart(key) {
      this.DELETE_FROM_CART(key)
    }
  }
}
</script>
