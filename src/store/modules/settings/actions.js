import * as types from '@/store/mutation-types'

const updateSetting = ({ commit }, payload) => {
  commit(types.SETTING_UPDATED, payload)
}

export default {
  updateSetting
}
