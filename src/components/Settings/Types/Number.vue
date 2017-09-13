<template lang="pug">
  span
    label.label(v-html="label")
    .field
      p.control
        input.input(type="number",
                    :placeholder="placeholder",
                    :value="value",
                    :min="0",
                    @input="change")
</template>

<script>
  import setting from '@/mixins/setting/setting'
  import type from '@/mixins/setting/type'
  import properties from '@/mixins/setting/properties'

  export default {
    name: 'v-setting-number',
    mixins: [
      setting,
      type,
      properties
    ]
  }
</script>
