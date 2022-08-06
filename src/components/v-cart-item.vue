<template>
  <div class="v-cart-item">
    <p>{{productData.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'v-cart-item',
  props: {
    productData: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
