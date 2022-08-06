<template>
  <div class="v-cart" v-if="CART.length">
    <h1>Cart</h1>
    <v-cart-item
      v-for="(cartItem, index) in CART"
      :key="cartItem.article"
      :productCartData="cartItem"
      @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script>
import vCartItem from '@/components/v-cart-item.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'v-cart',
  components: {
    vCartItem
  },
  computed: {
    ...mapGetters(['CART'])
  },
  methods: {
    ...mapActions(['DELETE_FROM_CART']),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    }
  }
}
</script>
