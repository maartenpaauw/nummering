import * as types from './mutation-types'

export const updateSetting = ({ commit }, payload) => {
  commit(types.SETTING_UPDATED, payload)
}

export const toggleMenu = ({ commit }, payload) => {
  commit(types.MENU_TOGGLED, payload)
}

export const toggleAbout = ({ commit }, payload) => {
  commit(types.ABOUT_TOGGLED, payload)
}

export const toggleMessage = ({ commit }, payload) => {
  commit(types.MESSAGE_TOGGLED, payload)
}
