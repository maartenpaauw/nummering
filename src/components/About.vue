<template lang="pug">
  .columns
    .column.is-8.is-offset-2
      .card
        header.card-header
          h3.card-header-title(v-html="title")
        .card-content
          .content
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
  .content {
    p {
      text-align: justify;
      line-height: 2rem;
    }
  }
</style>
