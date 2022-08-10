<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <v-header />
      <v-cart-menu v-if="$route.meta.requiresCartMenu" />
      <router-view />
    </div>
  </div>
</template>

<script>
import vHeader from '@/components/v-header.vue'
import vCartMenu from '@/components/v-catalog/v-cart-menu.vue'

export default {
  name: 'v-main-wrapper',
  components: {
    vHeader,
    vCartMenu,
  }
}
</script>
