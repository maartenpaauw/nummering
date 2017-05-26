<template lang="pug">
  section.hero
    .hero-body.has-text-centered
      .container
        h1.title.is-1(v-html="title")
        h2.subtitle.is-3(v-html="subtitle")
        router-link(to="/", v-html="link")
</template>

<script>
  export default {
    name: 'v-not-found',
    computed: {
      title () {
        return this.$t('not_found.title')
      },
      subtitle () {
        return this.$t('not_found.subtitle')
      },
      link () {
        return this.$t('not_found.link')
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  @import "../../node_modules/bulma/sass/utilities/variables";

  .subtitle {
    line-height: 4rem;
  }

  a {
    color: $grey-lighter;

    &:hover {
      color: $grey-light;
    }
  }
</style>
