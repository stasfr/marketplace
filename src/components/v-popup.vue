<template>
  <transition name="modal-fade">
    <div class="popup_wrapper">
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
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['HIDE_POPUP'])
  }
}
</script>
