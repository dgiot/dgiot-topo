import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'loadsh'
import createPersistedState from 'vuex-persistedstate'
import createLogger from "vuex/dist/logger"
const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
const state = () => ({
  konvaJson: {}
})

const getters = {
  konvaJson: (state) => state.konvaJson,
}
const mutations = {
  saveKonvaJson(state, json) {
    state.konvaJson = json
  },
  ClearKonvaJson: (state) => {
    state.konvaJson = {}
  },
}
const actions = {
  saveKonvaJson({ commit }, json) {
    commit('saveKonvaJson', json)
  },
  ClaerKonvaJson({ commit }) {
    commit('ClearKonvaJson')
  },
}
var plugins = [createPersistedState(),createLogger()]
const dgiotStore =new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: debug ? plugins : []
})
export default dgiotStore
window.dgiotStore = dgiotStore
Vue.prototype.$dgiotStore = dgiotStore;
