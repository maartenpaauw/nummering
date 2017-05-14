<template>
  <tr>
    <td v-html="number"></td>
  </tr>
</template>

<script>
  export default {
    name: 'the-example-number',
    props: ['number']
  }
</script>

<style>
  td {
    font-family: monospace;
  }
</style>
