<template lang="pug">
  .card
    header.card-header
      p.card-header-title
        | Instellingen
    .card-content
      .content
        the-setting(v-for='(setting, index) in settings', :key='index', :label='setting.label', :type='setting.type', :placeholder='setting.placeholder', :setting='index')
    footer.card-footer
      a.card-footer-item(@click='download()') Download
      a.card-footer-item.is-danger(@click='reset()') Resetten
</template>

<script>
  import {defaultState} from '../store/state'
  import TheSetting from '@/components/TheSetting'
  import _ from 'lodash'

  export default {
    name: 'the-settings',
    computed: {
      file_name () {
        return this.$store.getters.file_name
      },
      settings () {
        return this.$store.state.settings
      }
    },
    components: {
      TheSetting
    },
    methods: {
      reset () {
        _.forEach(defaultState, (value, key) => {
          this.$store.dispatch('updateSetting', {
            setting: key,
            value: value
          })
        })
      },
      download () {
        const link = document.createElement('a')
        document.body.appendChild(link)
        link.download = this.file_name
        link.href = `data:application/octet-stream,${encodeURIComponent(this.$store.getters.header + '\r\n')}${encodeURIComponent(this.$store.getters.range.join('\r\n'))}`
        link.click()
        document.body.removeChild(link)
      }
    }
  }
</script>

<style lang="scss">
  @import "../../node_modules/bulma/sass/utilities/variables";

  .card-footer-item {
    &.is-danger {
      background-color: $red;
      color: $white;
      border: none;

      &:hover {
        color: $light;
      }
    }
  }
</style>
