import * as types from './mutation-types'

export default {
  [types.SETTING_UPDATED] (state, {setting, value}) {
    state.settings[setting].value = value
  }
}
