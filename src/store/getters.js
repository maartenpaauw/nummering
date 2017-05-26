import { generate, generateDemoRange } from '../range'

export const getters = {
  filename: state => {
    return state.settings.filename
  },
  header: state => {
    return state.settings.header
  },
  start: state => {
    return state.settings.start
  },
  end: state => {
    return state.settings.end
  },
  step: state => {
    return state.settings.step
  },
  prefix: state => {
    return state.settings.prefix
  },
  suffix: state => {
    return state.settings.suffix
  },
  leading_zeros: state => {
    return state.settings.leading_zeros
  },
  range: state => {
    return generate(
      state.settings.start,
      state.settings.end,
      state.settings.step,
      state.settings.prefix,
      state.settings.leading_zeros,
      state.settings.suffix
    )
  },
  demo_range: state => {
    return generateDemoRange(
      state.settings.start,
      state.settings.end,
      state.settings.step,
      state.settings.prefix,
      state.settings.leading_zeros,
      state.settings.suffix
    )
  },
  settings: state => {
    return state.settings
  },
  message: state => {
    return state.visible.message
  }
}
