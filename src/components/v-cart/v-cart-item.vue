<template>
  <div class="v-cart-item" v-if="product !== undefined">
    <img
      class="v-cart-item__image"
      :alt="product.image"
      :src="require(`@/assets/images/${product.image}`)"
    />
    <div class="v-cart-item__info">
      <div>{{ product.name }}</div>
      <div>{{ product.article }}</div>
      <div>{{ product.price }} &#8381;</div>
    </div>
    <div class="v-cart-item__quantity">
      Quantity:
      <input v-model="productQuantity" type="text" @input.prevent="changeQuantity" />
    </div>
    <button class="v-cart-item__btn" @click="deleteFromCart(productArticle)">
      Remove
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'v-cart-item',
  props: {
    productArticle: {
      type: String,
      required: true
    },
    productQuantity: {
      type: Number,
      required: true
    },
    product: Object
  },
  data() {
    return {
      // product: this.$store.state.catalogDataModule.products.filter(el => el.article === productArticle)[0]
    }
  },
  computed: {
    ...mapGetters(['PRODUCTS']),
  },
  methods: {
    ...mapActions(['DELETE_FROM_CART', 'CHANGE_QUANTITY']),
    deleteFromCart(key) {
      this.DELETE_FROM_CART(key)
    },
    changeQuantity(event) {
      const articleToChange = this.productArticle
      const newQuantity = Number.parseInt(event.target.value)
      this.CHANGE_QUANTITY({articleToChange, newQuantity})
    }
  },
  mounted() {
    // console.log('this.product');
    // console.log(this.product);
    // console.log('this.allProducts');
    // console.log(this.allProducts);
  }
}
</script>
