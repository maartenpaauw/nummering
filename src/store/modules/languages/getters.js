export default {
  languageId: state => {
    return state.languageId
  },
  languages: state => {
    return state.languages
  },
  language: (state, getters) => {
    return getters.languages[getters.languageId]
  },
  cssClass: (state, getters) => {
    return getters.language.cssClass
  },
  i18n: (state, getters) => {
    return getters.language.i18n
  }
}
