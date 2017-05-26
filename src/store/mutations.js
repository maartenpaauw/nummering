import * as types from './mutation-types'

export default {
  [types.SETTING_UPDATED] (state, { setting, value }) {
    state.settings[setting] = value
  },
  [types.MESSAGE_TOGGLED] (state, { value }) {
    state.visible.message = value
  }
}
