import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    cart: []
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    },
    CART(state) {
      return state.cart
    }
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products
    },
    SET_CARD: (state, product) => {
      state.cart.push(product)
    }
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
    },
    ADD_TO_CART({ commit }, product) {
      commit('SET_CARD', product)
    }
  },
  modules: {}
})
