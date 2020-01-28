import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beaches: []
  },
  mutations: {
    ADD_BEACHES: (state, beaches) => {
      state.beaches = beaches;
    }
  },
  actions: {
  },
  modules: {
  }
})
