<template lang="pug">
  .field
    label.label(v-html="label")
    p.control
      input.input(:type="type",
                  :placeholder="placeholder",
                  :value="value",
                  @input="change",
                  :min="min")
</template>

<script>
  import { types } from '../settings'

  export default {
    name: 'v-setting',
    props: ['setting'],
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
      },
      min () {
        return (this.type === 'number') ? 0 : false
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
        return this.type === 'number' ? parseInt(value) : value
      }
    }
  }
</script>
