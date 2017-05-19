import generate from '../range'

export const getters = {
  filename: state => {
    return state.settings.filename.value
  },
  header: state => {
    return state.settings.header.value
  },
  start: state => {
    return state.settings.start.value
  },
  end: state => {
    return state.settings.end.value
  },
  step: state => {
    return state.settings.step.value
  },
  prefix: state => {
    return state.settings.prefix.value
  },
  suffix: state => {
    return state.settings.suffix.value
  },
  leading_zeros: state => {
    return state.settings.leading_zeros.value
  },
  range: state => {
    return generate(
      state.settings.start.value,
      state.settings.end.value,
      state.settings.step.value,
      state.settings.prefix.value,
      state.settings.leading_zeros.value,
      state.settings.suffix.value
    )
  },
  settings: state => {
    return state.settings
  },
  menu: state => {
    return state.visible.menu
  },
  about: state => {
    return state.visible.about
  },
  message: state => {
    return state.visible.message
  }
}
