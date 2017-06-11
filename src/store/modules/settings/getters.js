import { generate, generateDemoRange } from '@/range'

export default {
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
    return generate(state.settings)
  },
  demo_range: state => {
    return generateDemoRange(state.settings)
  },
  settings: state => {
    return state.settings
  }
}
