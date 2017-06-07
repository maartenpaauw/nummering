import Vue from 'vue'
import Vuei18n from 'vue-i18n'
import { messages } from './messages'

Vue.use(Vuei18n)

export default new Vuei18n({
  locale: 'nl_NL',
  messages
})
