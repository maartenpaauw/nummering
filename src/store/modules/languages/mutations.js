import * as types from '@/store/mutation-types'

export default {
  [types.LANGUAGE_CHANGED] (state) {
    state.languageId < state.languages.length - 1 ? state.languageId++ : state.languageId = 0
  }
}
