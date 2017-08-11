<template lang="pug">
  span
    label.label(v-html="label")
    .field.has-addons
      p.control.is-expanded
        input.input(type="text",
                    :placeholder="placeholder",
                    :value="value",
                    @input="change")
      p.control
        a.button.is-static .csv
</template>

<script>
  import setting from '@/mixins/setting/setting'
  import type from '@/mixins/setting/type'
  import properties from '@/mixins/setting/properties'

  export default {
    name: 'v-setting-addon',
    mixins: [
      setting,
      type,
      properties
    ]
  }
</script>
