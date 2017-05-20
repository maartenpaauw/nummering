<template lang="pug">
  tr
    th {{ header }}
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
