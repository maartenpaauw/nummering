<template lang="pug">
  tr
    td {{ number }}
</template>

<script>
  export default {
    name: 'v-example-number',
    props: ['number']
  }
</script>

<style lang="scss" scoped="scoped">
  td {
    font-family: monospace;
  }
</style>
