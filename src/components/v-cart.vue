<template>
  <div class="v-cart" v-if="CART.length">
    <h1>Cart</h1>
    <v-cart-item
      v-for="cartItem in CART"
      :key="cartItem.article"
      :productData="cartItem"
    />
  </div>
</template>

<script>
import vCartItem from '@/components/v-cart-item.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'v-cart',
  components: {
    vCartItem
  },
  computed: {
    ...mapGetters(['CART'])
  }
}
</script>
