import * as types from './mutation-types'

export const updateSetting = ({ commit }, payload) => {
  commit(types.SETTING_UPDATED, payload)
}
