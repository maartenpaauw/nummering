import * as types from './mutation-types'

export default {
  [types.MESSAGE_TOGGLED] (state, { value }) {
    state.visible.message = value
  }
}
