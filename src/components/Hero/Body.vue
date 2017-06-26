<template lang="pug">
  .hero-body
    .container.has-text-centered
      h1.title.is-2(v-html="title")
      h2.subtitle(v-html="subtitle")
</template>

<script>
  export default {
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
  .subtitle {
    margin-top: -0.5rem !important;
    line-height: 1.75rem;
  }
</style>
