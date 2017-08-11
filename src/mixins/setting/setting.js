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
        value: this.getValue(e.target.value)
      })
    },
    getValue (value) {
      return this.type === 'number' ? parseInt(value) : value
    }
  }
}
