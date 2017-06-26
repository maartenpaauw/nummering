<template lang="pug">
  .hero-head
    header.nav
      .container
        .nav-left
          router-link(class="nav-item is-active", :to="routeGenerate")
            span.icon
              i.fa.fa-file-excel-o
            span.brand(v-html="brand")
        .nav-center
          a.nav-item(href="https://github.com/maartenpaauw/nummering",
                     target="_blank",
                     :title="title")
            span.icon
              i.fa.fa-github
        .nav-right
</template>

<script>
  export default {
    name: 'v-hero-header',
    computed: {
      brand () {
        return this.$t('hero.title')
      },
      routeGenerate () {
        return { name: 'generator' }
      },
      title () {
        return this.$t('header.on_github')
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .brand {
    margin-left: 0.25rem;
  }
</style>
