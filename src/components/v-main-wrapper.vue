<template>
  <div class="v-main-wrapper">
    <p>{{ title }}</p>
    <vCatalog />
    <vCart />
  </div>
</template>

<script>
import vCatalog from '@/components/v-catalog.vue'
import vCart from '@/components/v-cart.vue'

export default {
  name: 'v-main-wrapper',
  components: {
    vCatalog,
    vCart
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
