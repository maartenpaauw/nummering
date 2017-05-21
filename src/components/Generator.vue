<template lang="pug">
  .columns
    .column.is-8.is-offset-2
      .columns
        .column
          v-message
      .columns
        .column
          v-settings
        .column
          v-example
</template>

<script>
  import Settings from '@/components/Settings'
  import Example from '@/components/Example'
  import Message from '@/components/Message'

  export default {
    name: 'v-generator',
    components: {
      'v-example': Example,
      'v-message': Message,
      'v-settings': Settings
    }
  }
</script>
