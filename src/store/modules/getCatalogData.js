import axios from 'axios'

export default {
  state: {
    products: []
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios('http://localhost:3000/products', {
        method: 'GET'
      })
        .then(products => {
          commit('SET_PRODUCTS_TO_STATE', products.data)
          return products
        })
        .catch(error => {
          console.log(error)
          return error
        })
    }
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    }
  }
}
