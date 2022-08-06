<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <v-header />
      <router-view />
    </div>
  </div>
</template>

<script>
import vHeader from '@/components/v-header.vue'

export default {
  name: 'v-main-wrapper',
  components: {
    vHeader
  },
}
</script>
