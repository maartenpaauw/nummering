<template lang="pug">
  .card
    header.card-header
      p.card-header-title(v-html="title")
    .card-content
      .content
        v-setting(v-for="(setting, index) in settings",
                  :key="index",
                  :setting="index")
    footer.card-footer
      a.card-footer-item(@click="download_it", v-html="download")
      a.card-footer-item.is-danger(@click="reset_it", v-html="reset")
</template>

<script>
  import { mapGetters } from 'vuex'
  import _ from 'lodash'
  import Setting from '@/components/Setting'
  import { values } from '../settings'
  import stream from '../stream/index'

  export default {
    name: 'v-settings',
    computed: {
      ...mapGetters([
        'filename',
        'settings',
        'header',
        'range'
      ]),
      title () {
        return this.$t('settings.title')
      },
      download () {
        return this.$t('settings.download')
      },
      reset () {
        return this.$t('settings.reset')
      }
    },
    components: {
      'v-setting': Setting
    },
    methods: {
      reset_it () {
        _.forEach(values, (value, key) => {
          this.$store.dispatch('updateSetting', {
            setting: key,
            value: value
          })
        })
      },
      download_it () {
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
