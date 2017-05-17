<template lang="pug">
  .nav
    .nav-center
      a.nav-item(:href='github', target='_blank', :title='title')
        span.icon
          i.fa.fa-github
</template>

<script>
  import * as npm from '../../package.json'
  import _ from 'lodash'

  export default {
    name: 'the-social',
    computed: {
      github () {
        return npm.repository.url
      },
      title () {
        return `${_.upperFirst(npm.name)} op GitHub`
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .nav {
    height: 2.25rem;
  }
</style>
