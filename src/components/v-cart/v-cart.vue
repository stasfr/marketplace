<template>
  <div class="container">
    <div class="v-cart">
      <div class="title" v-if="isCartEmpty(CART)">Cart is empty</div>
      <v-cart-item
        v-for="(cartItemValue, cartItemKey) in CART"
        :key="cartItemKey"
        :productArticle="cartItemKey"
        :productQuantity="cartItemValue"
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
  methods: {
    ...mapActions(['LOAD_FROM_LOCAL_STORAGE', 'GET_PRODUCTS_FROM_API']),
    isCartEmpty(CART) {
      return !Object.keys(CART).length
    }
  },
  computed: {
    ...mapGetters(['CART', 'PRODUCTS'])
  },
  mounted() {
    this.LOAD_FROM_LOCAL_STORAGE()
    this.GET_PRODUCTS_FROM_API(Object.keys(this.CART))
  }
}
</script>
