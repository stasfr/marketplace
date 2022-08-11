<template>
  <div class="navbar-search">
    <input
      class="navbar-search__input"
      type="text"
      placeholder="search..."
      v-model="searchBody"
    />
    <button class="navbar-search__btn" @click="search">
      <font-awesome-icon icon="fa-solid fa-search" />
    </button>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  data() {
    return {
      searchBody: ''
    }
  },
  components: {
    FontAwesomeIcon
  },
  methods: {
    search() {
      this.$router.push({
        name: 'SearchView',
        params: {
          searchBody: this.searchBody,
          title: `Search: ${this.searchBody}`
        }
      })
    }
  }
}
</script>
