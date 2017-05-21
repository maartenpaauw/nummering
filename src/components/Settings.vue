<template lang="pug">
  .card
    header.card-header
      p.card-header-title
        | Instellingen
    .card-content
      .content
        v-setting(v-for="(setting, index) in settings",
                  :key="index",
                  :label="setting.label",
                  :type="setting.type",
                  :placeholder="setting.placeholder",
                  :setting="index")
    footer.card-footer
      a.card-footer-item(@click="download") Download
      a.card-footer-item.is-danger(@click="reset") Resetten
</template>

<script>
  import { mapGetters } from 'vuex'
  import _ from 'lodash'
  import Setting from '@/components/Setting'
  import { defaultState } from '../store/state'
  import stream from '../stream/index'

  export default {
    name: 'v-settings',
    computed: {
      ...mapGetters([
        'filename',
        'settings',
        'header',
        'range'
      ])
    },
    components: {
      'v-setting': Setting
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
        stream(this.range, this.header, this.filename)
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  @import "../../node_modules/bulma/sass/utilities/variables";

  .card-footer-item {
    &.is-danger {
      color: $red;

      &:hover {
        color: $grey-dark;
      }
    }
  }
</style>
