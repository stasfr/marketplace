export default {
  state: {
    isPopupShow: false,
    popupMessage: ''
  },
  actions: {
    SHOW_POPUP({commit}, message) {
      commit('SHOW', message)
    },
    HIDE_POPUP({commit}) {
      commit('HIDE')
    }
  },
  mutations: {
    SHOW: (state, message) => {
      state.isPopupShow = true
      state.popupMessage = message
    },
    HIDE: (state) => {
      state.isPopupShow = false
    }
  },
  getters: {
    IS_POPUP_SHOW(state) {
      return state.isPopupShow
    },
    POPUP_MESSAGE(state) {
      return state.popupMessage
    }
  },
}
