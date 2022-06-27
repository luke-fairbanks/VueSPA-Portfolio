import { createStore } from 'vuex'

export default createStore({
  state: {
    cardAnimaionActivated: false
  },
  getters: {
  },
  mutations: {
    setActivated (state) {
      state.cardAnimaionActivated = true
    }
  },
  actions: {
  },
  modules: {
  }
})
