export default {
  state: {
    cart: {}
  },
  actions: {
    ADD_TO_CART({ commit }, product) {
      commit('SET_CARD', product)
    },
    DELETE_FROM_CART({ commit }, key) {
      commit('REMOVE_FROM_CART', key)
    }
  },
  mutations: {
    SET_CARD: (state, product) => {
      state.cart[product.article] = state.cart[product.article]
        ? state.cart[product.article] + 1
        : 1
    },
    REMOVE_FROM_CART: (state, key) => {
      delete state.cart[key]
    }
  },
  getters: {
    CART(state) {
      return state.cart
    }
  }
}
