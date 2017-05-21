import { values } from '../settings'

const settings = {
  ...values
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
