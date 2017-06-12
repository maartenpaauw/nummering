import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import plugins from './plugins'

import settings from './modules/settings'
import languages from './modules/languages'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins,
  modules: {
    settings,
    languages
  }
})
