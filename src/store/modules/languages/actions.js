import * as types from '@/store/mutation-types'

const changeLanguage = ({ commit }, payload) => {
  commit(types.LANGUAGE_CHANGED)
}

export default {
  changeLanguage
}
