<template lang="pug">
  .columns
    .column.is-8.is-offset-2
      .columns
        .column
          the-message
      .columns
        .column
          the-settings
        .column
          the-example
</template>

<script>
  import TheSettings from '@/components/TheSettings'
  import TheExample from '@/components/TheExample'
  import TheMessage from '@/components/TheMessage'

  export default {
    name: 'the-generator',
    components: {
      TheExample,
      TheMessage,
      TheSettings
    }
  }
</script>
