<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Voorbeeld
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <table class="table is-bordered is-striped">
          <thead>
            <the-example-header></the-example-header>
          </thead>
          <tbody>
            <the-example-number v-for="(number, index) in range" :key="index" :number="number"></the-example-number>
          </tbody>
        </table>
      </div>
    </div>
  </div>
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

<style lang="scss">

</style>
