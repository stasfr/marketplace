<template>
  <div class="v-catalog-item">
    <img
      class="v-catalog-item__image"
      :src="require('../assets/images/' + productData.image)"
      :alt="productData.image"
    />
    <div class="v-catalog-item__name">{{ productData.name }}</div>
    <div class="v-catalog-item__price">{{ productData.price }} &#8381;</div>
    <button
      class="v-catalog-item__add_to_card_btn btn"
      @click="sendDataToParent"
    >
      Buy
    </button>
  </div>
</template>

<script>
export default {
  name: 'v-catalog-item',
  props: {
    productData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    sendDataToParent() {
      this.$emit('sendArticle', this.productData.article)
    }
  }
}
</script>
