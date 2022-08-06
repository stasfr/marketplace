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
    <button class="v-cart-item__btn btn">Remove</button>
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
  }
}
</script>
