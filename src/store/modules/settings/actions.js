import * as types from '@/store/mutation-types'

export const updateSetting = ({ commit }, payload) => {
  commit(types.SETTING_UPDATED, payload)
}

export default {
  updateSetting
}
