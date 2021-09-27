import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'loadsh'
import createPersistedState from 'vuex-persistedstate'
import createLogger from "vuex/dist/logger"
const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
const state = () => ({
})

const getters = {
}
const mutations = {
}
const actions = {
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
