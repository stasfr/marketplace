<template>
  <div class="popup__wrapper">
    <div class="popup_message">
      <div class="title">Sorry</div>
      <div>{{ this.POPUP_MESSAGE }}</div>
      <button @click="HIDE_POPUP">close</button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['POPUP_MESSAGE'])
  },
  methods: {
    ...mapActions(['HIDE_POPUP'])
  }
}
</script>
