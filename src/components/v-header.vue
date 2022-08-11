<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-content">
        <router-link class="navbar-logo" to="/">{{ title }}</router-link>
        <div class="navbar-search">
          <input class="navbar-search__input" type="text" placeholder="search...">
          <button class="navbar-search__btn" @click="search"><font-awesome-icon icon="fa-solid fa-search" /></button>
        </div>
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  data() {
    return {
      title,
      links
    }
  },
  components: {
    FontAwesomeIcon
  },
  methods: {
    search() {
      console.log(123);
    }
  }
}
</script>
