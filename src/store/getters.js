import _ from 'lodash'
import addZero from 'add-zero'

export const getters = {
  file_name: state => {
    return state.settings.file_name.value
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
    return _.map(_.range(state.settings.start.value, (state.settings.end.value + 1), state.settings.step.value), (number) => {
      return `${state.settings.prefix.value}${addZero(number, state.settings.leading_zeros.value)}${state.settings.suffix.value}`.trim()
    })
  }
}
