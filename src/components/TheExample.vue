<template lang="pug">
  .card
    header.card-header
      p.card-header-title
        | Voorbeeld
    .card-content
      .content
        table.table.is-bordered.is-striped
          thead
            the-example-header
          tbody
            the-example-number(v-for='(number, index) in range', :key='index', :number='number')
</template>

<script>
  import TheExampleHeader from '@/components/TheExampleHeader'
  import TheExampleNumber from '@/components/TheExampleNumber'
  import { mapGetters } from 'vuex'

  export default {
    name: 'the-example',
    components: {
      TheExampleHeader,
      TheExampleNumber
    },
    computed: {
      ...mapGetters([
        'range'
      ])
    }
  }
</script>
