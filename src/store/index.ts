import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

const sophia = {
  namespaced: true,
  state: () => ({
    isSophia: false
  }),
  mutations: {
    setSophia (state: { isSophia: boolean }) {
      state.isSophia = true
    },
    removeSophia (state: { isSophia: boolean }) {
      state.isSophia = false
    }
  }
}

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['sophia']
})

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
    sophia
  },
  plugins: [
    vuexLocal.plugin
  ]
})
