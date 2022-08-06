<template>
  <div class="v-cart-item">
    <p>{{productCartData.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'v-cart-item',
  props: {
    productCartData: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
