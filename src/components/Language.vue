<template lang="pug">
  li.is-active
    a(@click="toggle")
      span.flag-icon(:class="flag")
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'v-language',
    computed: mapGetters('languages', {
      flag: 'cssClass'
    }),
    methods: mapActions('languages', {
      toggle: 'changeLanguage'
    })
  }
</script>

<style lang="scss" scoped="scoped">
  li {
    margin-left: auto;
  }

  span {
    padding: 0.27rem 0;
  }
</style>
