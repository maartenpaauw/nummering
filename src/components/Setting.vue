<template lang="pug">
  span
    label.label(v-html="label")
    .field(:class="{ 'has-addons': isFilename }")
      p.control(:class="{ 'is-expanded': isFilename }")
        input.input(:type="type",
                    :placeholder="placeholder",
                    :value="value",
                    @input="change",
                    :min="min")
      p.control(v-if="isFilename")
        a.button.is-static .csv
</template>

<script>
  import { types } from '../settings'

  export default {
    name: 'v-setting',
    props: {
      setting: {
        type: [String, Number],
        required: true
      }
    },
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
      },
      isFilename () {
        return this.setting === 'filename'
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

<style lang="scss" scoped="scoped">
  p {
    margin-bottom: 0 !important;
  }

  input {
    margin-bottom: 1rem;
  }
</style>
