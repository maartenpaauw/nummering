import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import { getters } from './getters'
import mutations from './mutations'
import { state } from './state'
import { plugins } from './plugins'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
  plugins
})
