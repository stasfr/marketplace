<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <v-header />
      <v-cart-menu v-if="$route.meta.requiresCartMenu" />
      <v-popup v-if="IS_POPUP_SHOW" />
      <router-view />
    </div>
  </div>
</template>

<script>
import vHeader from '@/components/v-header.vue'
import vCartMenu from '@/components/v-catalog/v-cart-menu.vue'
import vPopup from '@/components/v-popup.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'v-main-wrapper',
  components: {
    vHeader,
    vCartMenu,
    vPopup
  },
  computed: {
    ...mapGetters(['IS_POPUP_SHOW'])
  }
}
</script>
