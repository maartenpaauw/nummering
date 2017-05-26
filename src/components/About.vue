<template lang="pug">
  .columns
    .column.is-8.is-offset-2
      h1.title.is-3(v-html="title")
      p(v-html="body")
</template>

<script>
  export default {
    name: 'v-about',
    computed: {
      title () {
        return this.$t('about.title')
      },
      body () {
        return this.$t('about.body')
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  p {
    text-align: justify;
    line-height: 2rem;
  }
</style>
