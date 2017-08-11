<template lang="pug">
  component(:is="component",
            :setting="setting")
</template>

<script>
  import type from '@/mixins/setting/type'
  import properties from '@/mixins/setting/properties'

  import Addon from '@/components/Settings/Types/Addon'
  import Number from '@/components/Settings/Types/Number'
  import Text from '@/components/Settings/Types/Text'
  
  export default {
    name: 'v-setting',
    components: {
      SettingAddon: Addon,
      SettingNumber: Number,
      SettingText: Text
    },
    computed: {
      component () {
        return `setting-${this.type}`
      }
    },
    mixins: [
      type,
      properties
    ]
  }
</script>

<style lang="scss">
  p {
    margin-bottom: 0 !important;
  }

  input {
    margin-bottom: 1rem;
  }
</style>