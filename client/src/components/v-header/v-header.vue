<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-content">
        <router-link class="navbar-logo" to="/">{{ title }}</router-link>
        <v-header-search />
        <ul class="navbar-list">
          <li class="navbar-item" v-for="link in links" :key="link.alias">
            <router-link class="navbar-link" :to="link.url">
              {{ link.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { links, title } from '@/_config'
import vHeaderSearch from '@/components/v-header/v-header-search.vue'

export default {
  data() {
    return {
      title,
      links
    }
  },
  components: {
    vHeaderSearch
  }
}
</script>
