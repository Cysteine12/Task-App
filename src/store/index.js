import { createStore } from 'vuex'
import Auth from './modules/auth'
import Product from './modules/post'
import User from './modules/user'

export default createStore({
  state() {
    return {
      
    }
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    Auth,
    Product,
    User
  }
})