<template>
  <transition name="modal-fade">
    <div v-if="IS_POPUP_SHOW" class="popup_wrapper">
      <div class="popup_body">
        <div class="popup_header">
          <slot name="header"> default header </slot>
        </div>
        <div class="popup_message">
          <slot name="message"> default message </slot>
        </div>
        <button class="popup_btn" @click="HIDE_POPUP">close</button>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions(['HIDE_POPUP'])
  },
  computed: {
    ...mapGetters(['IS_POPUP_SHOW'])
  }
}
</script>
