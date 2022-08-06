<template>
  <div class="v-cart-item">
    <img
      class="v-cart-item__image"
      :src="require('../assets/images/' + productCartData.image)"
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
    <button class="v-cart-item__btn btn" @click="deleteFromCart">Remove</button>
  </div>
</template>

<script>
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
  mounted() {
    this.productCartData['quantity'] = 1
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart')
    }
  }
}
</script>
