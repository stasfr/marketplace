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
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'v-cart',
  components: {
    vCartItem
  },
  computed: {
    ...mapGetters(['CART', 'PRODUCTS'])
  },
  created() {
    this.GET_PRODUCTS_FROM_API()
  },
  mounted() {
    this.LOAD_FROM_LOCAL_STORAGE()
  },
  methods: {
    ...mapActions(['LOAD_FROM_LOCAL_STORAGE', 'GET_PRODUCTS_FROM_API']),
    isCartEmpty(CART) {
      return !Object.keys(CART).length
    },
    findProduct(cartItemKey, cartItemValue, PRODUCTS) {
      let cartProduct = PRODUCTS.find(
        element => element.article === cartItemKey
      )
      cartProduct['quantity'] = cartItemValue
      return cartProduct
    }
  }
}
</script>
