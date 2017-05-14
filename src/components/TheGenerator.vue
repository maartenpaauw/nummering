<template>
  <div class="columns">
    <div class="column is-offset-2 is-4">
      <the-settings></the-settings>
    </div>
    <div class="column is-4">
      <the-example></the-example>
    </div>
  </div>
</template>

<script>
  import TheSettings from '@/components/TheSettings'
  import TheExample from '@/components/TheExample'

  export default {
    name: 'the-generator',
    components: {
      TheSettings,
      TheExample
    }
  }
</script>

<style>

</style>
