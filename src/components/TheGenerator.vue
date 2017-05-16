<template>
  <div class="columns">
    <div class="column is-8 is-offset-2">
      <div class="columns">
        <div class="column">
          <the-message></the-message>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <the-settings></the-settings>
        </div>
        <div class="column">
          <the-example></the-example>
        </div>
      </div>
    </div>
  </div>
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

<style lang="scss">

</style>
