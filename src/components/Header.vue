<template lang="pug">
  nav.nav
    .nav-center
      a.nav-item(:href="github",
                 target="_blank",
                 :title="title")
        span.icon
          i.fa.fa-github
</template>

<script>
  import * as npm from '../../package.json'

  export default {
    name: 'v-header',
    computed: {
      github () {
        return npm.repository.url
      },
      title () {
        return this.$t('header.on_github')
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .nav {
    height: 2.25rem;
  }
</style>
