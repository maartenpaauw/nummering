<template lang="pug">
  tr
    th(v-html="header")
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
