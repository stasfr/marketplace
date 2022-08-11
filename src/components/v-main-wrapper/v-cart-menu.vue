<template>
  <div class="cart_icon_wrapper">
    <router-link class="cart_icon_container" to="/cart">
      <font-awesome-icon
        class="cart_icon_container__item"
        icon="fa-solid fa-cart-shopping"
      />
    </router-link>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  components: {
    FontAwesomeIcon
  }
}
</script>
