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
    },
    LOAD_FROM_LOCAL_STORAGE({ commit }) {
      commit('GET_LOCAL_CART')
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
    GET_LOCAL_CART: state => {
      const localCart = localStorage.getItem('UserCart')
      if (localCart !== null) {
        state.cart = JSON.parse(localCart)
      } else {
        state.cart = {}
      }
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
