<template>
  <div class="container" v-if="PRODUCTS[0] !== undefined">
    <div>{{ $route.params.productArticle }}</div>
    <div>{{ PRODUCTS[0].image }}</div>
    <div>{{ PRODUCTS[0].name }}</div>
    <div>{{ PRODUCTS[0].article }}</div>
    <div>{{ PRODUCTS[0].price }}</div>
    <div>{{ PRODUCTS[0].category }}</div>
    <div>{{ PRODUCTS[0].available }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  // beforeCreate() {
  //   document.title = this.$route.params.productArticle
  // },
  created() {
    this.GET_PRODUCTS_FROM_API(this.$route.params.productArticle)
  },
  computed: {
    ...mapGetters(['PRODUCTS'])
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API'])
  }
}
</script>
