<template>
  <div class="v-main-wrapper">
    <v-header />
    <v-catalog />
    <v-cart />
  </div>
</template>

<script>
import vHeader from '@/components/v-header.vue'
import vCatalog from '@/components/v-catalog.vue'
import vCart from '@/components/v-cart.vue'

export default {
  name: 'v-main-wrapper',
  components: {
    vCatalog,
    vCart,
    vHeader
  },
  props: {},
  data() {
    return {
      title: 'Main wrapper'
    }
  },
  computed: {},
  methods: {},
  watch: {}
}
</script>
