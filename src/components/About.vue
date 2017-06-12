<template lang="pug">
  .columns
    .column.is-8.is-offset-2
      .card
        header.card-header
          h3.card-header-title(v-html="title")
        .card-content
          .content
            span(v-for="section in body")
              h5(v-html="section.title")
              p(v-html="section.body")
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
    h5,
    p {
      line-height: 2.25rem;
      margin-bottom: 0;
    }

    h5 {
      margin-top: 2rem;
      font-weight: 500;
    }

    span:first-of-type > h5 {
      margin-top: 0;
    }
  }
</style>
