export default {
  state: {
    cart: JSON.parse(localStorage.getItem('UserCart')) || {}
  },
  actions: {
    ADD_TO_CART({ commit }, product) {
      commit('SET_CARD', product)
    },
    DELETE_FROM_CART({ commit }, key) {
      commit('REMOVE_FROM_CART', key)
    },
    CHANGE_QUANTITY({commit}, changeData) {
      commit('SET_QUANTITY', changeData)
    }
  },
  mutations: {
    SET_CARD: (state, product) => {
      state.cart[product.article] = state.cart[product.article]
        ? state.cart[product.article] + 1
        : 1
      localStorage.setItem('UserCart', JSON.stringify(state.cart))
    },
    REMOVE_FROM_CART: (state, key) => {
      delete state.cart[key]
      localStorage.setItem('UserCart', JSON.stringify(state.cart))
    },
    SET_QUANTITY: (state, changeData) => {
      state.cart[changeData.articleToChange] = changeData.newQuantity
      localStorage.setItem('UserCart', JSON.stringify(state.cart))
    }
  },
  getters: {
    CART(state) {
      return state.cart
    }
  }
}
