<template lang="pug">
  section.hero.is-medium.is-primary.is-bold
    .hero-body
      .container.has-text-centered
        h1.title.is-2(v-html="title")
        h2.subtitle(v-html="subtitle")
</template>

<script>
  export default {
    name: 'v-hero',
    computed: {
      title () {
        return this.$t('hero.title')
      },
      subtitle () {
        return this.$t('hero.subtitle')
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .title,
  .subtitle {
    line-height: 2.25rem;
  }

  .subtitle {
    margin-top: -0.5rem !important;
  }

  .tag {
    margin-top: -0.25rem;
  }
</style>
