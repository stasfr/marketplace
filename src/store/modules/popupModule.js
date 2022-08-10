export default {
  state: {
    isPopupShow: false
  },
  actions: {
    SHOW_POPUP({commit}) {
      commit('SHOW')
    },
    HIDE_POPUP({commit}) {
      commit('HIDE')
    }
  },
  mutations: {
    SHOW: (state) => {
      state.isPopupShow = true
    },
    HIDE: (state) => {
      state.isPopupShow = false
    }
  },
  getters: {
    IS_POPUP_SHOW(state) {
      return state.isPopupShow
    }
  },
}
