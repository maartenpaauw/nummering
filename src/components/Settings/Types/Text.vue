<template lang="pug">
  span
    label.label(v-html="label")
    .field
      p.control
        input.input(type="text",
                    :placeholder="placeholder",
                    :value="value",
                    @input="change")
</template>

<script>
  import setting from '@/mixins/setting/setting'
  import type from '@/mixins/setting/type'
  import properties from '@/mixins/setting/properties'

  export default {
    name: 'v-setting-text',
    mixins: [
      setting,
      type,
      properties
    ]
  }
</script>
