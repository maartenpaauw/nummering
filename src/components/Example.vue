<template lang="pug">
  .card
    header.card-header
      h3.card-header-title(v-html="header")
    .card-content
      .content
        table.table.is-bordered.is-striped
          thead
            v-example-header
          tbody
            v-example-number(v-for="(number, index) in demo_range",
                             :key="index",
                             :number="number")
</template>

<script>
  import { mapGetters } from 'vuex'
  import ExampleHeader from '@/components/ExampleHeader'
  import ExampleNumber from '@/components/ExampleNumber'

  export default {
    name: 'v-example',
    components: {
      'v-example-header': ExampleHeader,
      'v-example-number': ExampleNumber
    },
    computed: {
      ...mapGetters([
        'demo_range'
      ]),
      header () {
        return this.$t('example.header')
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  table {
    margin-bottom: 0;
  }
</style>
