<template>
  <router-link class="cart_icon_container" to="/cart">
    <font-awesome-icon class="cart_icon_container__item" icon="fa-solid fa-cart-shopping" />
  </router-link>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  components: {
    FontAwesomeIcon
  }
}
</script>
