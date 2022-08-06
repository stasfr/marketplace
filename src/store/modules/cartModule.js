export default {
  state: {
    cart: []
  },
  actions: {
    ADD_TO_CART({ commit }, product) {
      commit('SET_CARD', product)
    },
    DELETE_FROM_CART({ commit }, index) {
      commit('REMOVE_FROM_CART', index)
    }
  },
  mutations: {
    SET_CARD: (state, product) => {
      if (state.cart.length) {
        let isProductExist = false
        state.cart.map(item => {
          if (item.article === product.article) {
            isProductExist = true
            item.quantity++
          }
        })
        if (!isProductExist) {
          state.cart.push(product)
        }
      } else {
        state.cart.push(product)
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    }
  },
  getters: {
    CART(state) {
      return state.cart
    }
  }
}
