<template>
  <div class="v-cart">
    <v-cart-item
      v-for="(cartItemValue, cartItemKey) in cart"
      :key="cartItemKey"
      :productArticle="cartItemKey"
      :productQuantity="cartItemValue"
      :productData="products.find(element => element.article === cartItemKey)"
    />
  </div>
</template>

<script>
import vCartItem from '@/components/v-cart/v-cart-item.vue'

export default {
  name: 'v-cart',
  components: {
    vCartItem
  },
  props: {
    cart: {
      type: Object,
      require: true
    },
    products: {
      type: Array,
      require: true
    }
  }
}
</script>
