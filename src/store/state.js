import { values } from '../settings'

const settings = {
  filename: {
    value: values.filename
  },
  header: {
    value: values.header
  },
  start: {
    value: values.start
  },
  end: {
    value: values.end
  },
  step: {
    value: values.step
  },
  prefix: {
    value: values.prefix
  },
  suffix: {
    value: values.suffix
  },
  leading_zeros: {
    value: values.leading_zeros
  }
}

const visible = {
  menu: false,
  about: false,
  message: true
}

export const state = {
  settings,
  visible
}
