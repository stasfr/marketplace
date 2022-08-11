<template>
  <form class="navbar-search" @submit.prevent="search">
    <input
      class="navbar-search__input"
      type="text"
      placeholder="search..."
      v-model="searchBody"
      :class="{ error: isError }"
    />
    <button class="navbar-search__btn">
      <font-awesome-icon icon="fa-solid fa-search" />
    </button>
  </form>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  data() {
    return {
      searchBody: '',
      isError: false
    }
  },
  components: {
    FontAwesomeIcon
  },
  methods: {
    search() {
      if (this.searchBody.length) {
        this.$router.push({
          name: 'SearchView',
          params: {
            searchBody: this.searchBody,
            title: `Search: ${this.searchBody}`
          }
        })
      } else {
        this.isError = true
      }
    }
  },
  watch: {
    searchBody() {
      this.isError = false
    }
  }
}
</script>
