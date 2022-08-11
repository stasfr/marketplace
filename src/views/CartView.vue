<template>
  <div class="title">Cart</div>
  <div class="title" v-if="isCartEmpty(CART)">Cart is empty</div>
  <v-cart :products="PRODUCTS" :cart="CART" />
</template>

<script>
import vCart from '@/components/v-cart/v-cart.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    vCart
  },
  computed: {
    ...mapGetters(['CART', 'PRODUCTS'])
  },
  methods: {
    ...mapActions(['LOAD_FROM_LOCAL_STORAGE', 'GET_PRODUCTS_FROM_API']),
    isCartEmpty(CART) {
      return !Object.keys(CART).length
    }
  },
  mounted() {
    this.LOAD_FROM_LOCAL_STORAGE()
    this.GET_PRODUCTS_FROM_API(Object.keys(this.CART))
  }
}
</script>
