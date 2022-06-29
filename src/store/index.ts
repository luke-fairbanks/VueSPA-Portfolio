import { createStore } from 'vuex'

export default createStore({
  state: {
    cardAnimaionActivated: false,
    loggedIn: false
  },
  getters: {
  },
  mutations: {
    setActivated (state) {
      state.cardAnimaionActivated = true
    },
    setLoggedIn (state) {
      state.loggedIn = true
    },
    setLoggedOut (state) {
      state.loggedIn = false
    }
  },
  actions: {
  },
  modules: {
  }
})
