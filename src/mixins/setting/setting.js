import { mapActions } from 'vuex'

export default {
  computed: {
    value () {
      return this.$store.getters[`settings/${this.setting}`]
    },
    label () {
      return this.$t(`settings.${this.setting}.label`)
    },
    placeholder () {
      return this.$t(`settings.${this.setting}.placeholder`)
    }
  },
  methods: {
    ...mapActions('settings', [
      'updateSetting'
    ]),
    change (e) {
      this.updateSetting({
        setting: this.setting,
        value: this.getValue(e)
      })
    },
    getValue (event) {
      if (this.type === 'number') {
        return parseInt(event.target.value)
      } else if (this.type === 'checkbox') {
        return event.target.checked
      } else {
        return event.target.value
      }
    }
  }
}
