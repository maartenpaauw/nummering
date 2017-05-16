<template>
  <tr>
    <th v-html="header"></th>
  </tr>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'the-example-header',
    computed: {
      ...mapGetters([
        'header'
      ])
    }
  }
</script>

<style lang="scss">

</style>
