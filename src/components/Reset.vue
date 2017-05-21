<template lang="pug">
  a.card-footer-item(@click="reset_it", v-html="reset")
</template>

<script>
  import _ from 'lodash'
  import { values } from '../settings'

  export default {
    name: 'v-reset',
    computed: {
      reset () {
        return this.$t('settings.reset')
      }
    },
    methods: {
      reset_it () {
        _.forEach(values, (value, key) => {
          this.$store.dispatch('updateSetting', {
            setting: key,
            value: value
          })
        })
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  @import "../../node_modules/bulma/sass/utilities/variables";

  .card-footer-item {
    color: $red;

    &:hover {
      color: $grey-dark;
    }
  }
</style>
