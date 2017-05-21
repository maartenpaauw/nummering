import * as types from './mutation-types'

export default {
  [types.SETTING_UPDATED] (state, { setting, value }) {
    state.settings[setting] = value
  },
  [types.MENU_TOGGLED] (state, { value }) {
    state.visible.menu = value
  },
  [types.ABOUT_TOGGLED] (state, { value }) {
    state.visible.about = value
  },
  [types.MESSAGE_TOGGLED] (state, { value }) {
    state.visible.message = value
  }
}
