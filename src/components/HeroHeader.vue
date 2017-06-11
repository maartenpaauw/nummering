<template lang="pug">
  .hero-head
    header.nav
      .container
        .nav-center
          a.nav-item(href="https://github.com/maartenpaauw/nummering",
                     target="_blank",
                     :title="title")
            span.icon
              i.fa.fa-github
</template>

<script>
  export default {
    name: 'v-hero-header',
    computed: {
      title () {
        return this.$t('header.on_github')
      }
    }
  }
</script>
