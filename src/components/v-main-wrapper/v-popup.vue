<template>
  <transition name="modal-fade">
    <div v-if="IS_POPUP_SHOW" class="popup_wrapper" @click="HIDE_POPUP">
      <div class="popup_body">
        <div class="popup_header">
          <slot name="header"> default header </slot>
        </div>
        <div class="popup_message">
          <slot name="message"> default message </slot>
        </div>
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
