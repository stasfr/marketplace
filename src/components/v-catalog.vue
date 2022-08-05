<template>
  <div class="v-catalog">
    <h1>catalog</h1>
    <vCatalogItem />
  </div>
</template>

<script>
import vCatalogItem from '@/components/v-catalog-item.vue'

export default {
  name: 'v-catalog',
  components: {
    vCatalogItem
  }
}
</script>
