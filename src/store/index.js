import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as actions from './actions'
import { getters } from './getters'
import mutations from './mutations'
import { state } from './state'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
  plugins: [
    createPersistedState()
  ]
})
