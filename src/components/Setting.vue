<template lang="pug">
  .field
    label.label(v-html="label")
    p.control
      input.input(:type="type",
                  :placeholder="placeholder",
                  :value="value",
                  @input="change",
                  :min="min()")
</template>

<script>
  import { types } from '../settings'

  export default {
    name: 'v-setting',
    props: ['setting', 'type'],
    computed: {
      value () {
        return this.$store.getters[this.setting]
      },
      type () {
        return types[this.setting]
      },
      label () {
        return this.$t(`settings.${this.setting}.label`)
      },
      placeholder () {
        return this.$t(`settings.${this.setting}.placeholder`)
      }
    },
    methods: {
      change (e) {
        this.$store.dispatch('updateSetting', {
          setting: this.setting,
          value: this.getValue(e.target.value)
        })
      },
      getValue (value) {
        if (this.type === 'number') {
          return parseInt(value)
        } else {
          return value
        }
      },
      min () {
        return (this.type === 'number') ? 0 : false
      }
    }
  }
</script>
