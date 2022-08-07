<template>
  <div class="container">
    <div class="v-cart">
      <div class="title" v-if="isCartEmpty(CART)">Cart is empty</div>
      <v-cart-item
        v-for="(cartItemValue, cartItemKey) in CART"
        :key="cartItemKey"
        :productCartData="findProduct(cartItemKey, cartItemValue, PRODUCTS)"
      />
    </div>
  </div>
</template>

<script>
import vCartItem from '@/components/v-cart/v-cart-item.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'v-cart',
  components: {
    vCartItem
  },
  computed: {
    ...mapGetters(['CART', 'PRODUCTS'])
  },
  methods: {
    isCartEmpty(CART) {
      return !Object.keys(CART).length
    },
    findProduct(cartItemKey, cartItemValue, PRODUCTS) {
      let prod = PRODUCTS.find(element => element.article === cartItemKey)
      prod['quantity'] = cartItemValue
      return prod
    }
  }
}
</script>
