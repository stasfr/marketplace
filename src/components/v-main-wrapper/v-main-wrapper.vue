<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <div class="container">
        <v-header />
        <v-cart-menu v-if="$route.meta.requiresCartMenu" />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from '@/components/v-header/v-header.vue'
import vCartMenu from '@/components/v-main-wrapper/v-cart-menu.vue'

export default {
  name: 'v-main-wrapper',
  components: {
    vHeader,
    vCartMenu
  }
}
</script>
