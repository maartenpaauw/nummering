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
  import Header from '@/components/Example/Header'
  import Number from '@/components/Example/Number'

  export default {
    name: 'v-example',
    components: {
      'v-example-header': Header,
      'v-example-number': Number
    },
    computed: {
      ...mapGetters('settings', [
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
