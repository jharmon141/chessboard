import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedTiles: []
  },
  getters: {
    currentTile: state => {
      return state.selectedTiles[state.selectedTiles.length - 1]
    }
  },
  mutations: {
    addSelectedTile: (state, params) => {
      state.selectedTiles.push(params)
    }
  },
  actions: {
    handleAddSelectedTile: ({ commit} , params) => {
      commit('addSelectedTile', params)
    }
  }
})
