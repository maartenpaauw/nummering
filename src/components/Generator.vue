<template lang="pug">
  .columns
    .column.is-8.is-offset-2
      .columns
        .column.is-12
          v-message
      .columns
        .column.is-6
          .columns
            .column.is-12
              v-settings
        .column.is-6
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
