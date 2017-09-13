<template lang="pug">
  span
    label.label(v-html="label")
    .field
      .control
        label.checkbox
          input(type='checkbox',
                :checked="value",
                @click="change")
          span(v-html="placeholder")
</template>

<script>
  import setting from '@/mixins/setting/setting'
  import type from '@/mixins/setting/type'
  import properties from '@/mixins/setting/properties'

  export default {
    name: 'v-setting-checkbox',
    mixins: [
      setting,
      type,
      properties
    ]
  }
</script>

<style lang="scss" scoped>
  .control {
    span {
      margin-left: 1rem;
    }
  }
</style>
