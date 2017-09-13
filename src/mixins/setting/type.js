import { types } from '@/settings'

export default {
  computed: {
    type () {
      return types[this.setting]
    }
  }
}
