import * as types from './mutation-types'

const toggleMessage = ({ commit }, payload) => {
  commit(types.MESSAGE_TOGGLED, payload)
}

export default {
  toggleMessage
}
