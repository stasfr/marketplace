<template>
  <div class="container">
    <div class="v-cart">
      <v-cart-item
        v-for="(cartItem, index) in CART"
        :key="cartItem.article"
        :productCartData="cartItem"
        @deleteFromCart="deleteFromCart(index)"
      />
    </div>
  </div>
</template>

<script>
import vCartItem from '@/components/v-cart/v-cart-item.vue'
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
