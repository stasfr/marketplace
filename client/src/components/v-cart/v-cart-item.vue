<template>
  <div class="v-cart-item" v-if="productData !== undefined">
    <img
      class="v-cart-item__image"
      :alt="productData.image"
      :src="require(`@/assets/images/${productData.image}`)"
    />
    <div class="v-cart-item__info">
      <router-link
        :to="{
          name: 'ProductView',
          params: {
            productArticle: productData.article,
            title: productData.name
          }
        }"
      >
        <div>{{ productData.name }}</div>
      </router-link>
      <div>{{ productData.article }}</div>
      <div>{{ productData.price }} &#8381;</div>
    </div>
    <div class="v-cart-item__quantity">
      <font-awesome-icon
        id="minus"
        @click="reduceCount"
        icon="fa-solid fa-minus"
      />
      <input
        id="input"
        v-model="localQuantity"
        type="text"
        @input.prevent="changeQuantity"
      />
      <font-awesome-icon
        id="plus"
        @click="increaseCount"
        icon="fa-solid fa-plus"
      />
    </div>
    <button class="v-cart-item__btn" @click="deleteFromCart(productArticle)">
      Remove
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'v-cart-item',
  components: {
    FontAwesomeIcon
  },
  props: {
    productArticle: {
      type: String,
      required: true
    },
    productQuantity: {
      type: Number,
      required: true
    },
    productData: Object
  },
  data() {
    return {
      localQuantity: this.productQuantity
    }
  },
  methods: {
    ...mapActions(['DELETE_FROM_CART', 'CHANGE_QUANTITY']),
    deleteFromCart(key) {
      this.DELETE_FROM_CART(key)
    },
    changeQuantity() {
      const articleToChange = this.productArticle
      const newQuantity = Number.parseInt(this.localQuantity)
      this.CHANGE_QUANTITY({ articleToChange, newQuantity })
    },
    reduceCount() {
      this.localQuantity--
      this.changeQuantity()
    },
    increaseCount() {
      this.localQuantity++
      this.changeQuantity()
    }
  }
}
</script>
