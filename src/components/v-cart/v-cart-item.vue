<template>
  <div class="v-cart-item" v-if="productData !== undefined">
    <img
      class="v-cart-item__image"
      :alt="productData.image"
      :src="require(`@/assets/images/${productData.image}`)"
    />
    <div class="v-cart-item__info">
      <div>{{ productData.name }}</div>
      <div>{{ productData.article }}</div>
      <div>{{ productData.price }} &#8381;</div>
    </div>
    <div class="v-cart-item__quantity">
      Quantity:
      <input v-model="productQuantity" type="text" @input.prevent="changeQuantity" />
    </div>
    <button class="v-cart-item__btn" @click="deleteFromCart(productArticle)">
      Remove
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'v-cart-item',
  props: {
    productArticle: {
      type: String,
      required: true
    },
    productQuantity: {
      type: Number,
      required: true
    },
    productData: Object
  },
  methods: {
    ...mapActions(['DELETE_FROM_CART', 'CHANGE_QUANTITY']),
    deleteFromCart(key) {
      this.DELETE_FROM_CART(key)
    },
    changeQuantity(event) {
      const articleToChange = this.productArticle
      const newQuantity = Number.parseInt(event.target.value)
      this.CHANGE_QUANTITY({articleToChange, newQuantity})
    }
  }
}
</script>
