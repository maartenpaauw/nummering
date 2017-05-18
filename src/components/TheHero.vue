<template lang="pug">
  section.hero.is-medium.is-primary.is-bold
    .hero-body
      .container
        h1.title.is-2(v-html="title")
        h2.subtitle(v-html="subtitle")
</template>

<script>
  import * as npm from '../../package.json'
  import _ from 'lodash'

  export default {
    name: 'the-hero',
    computed: {
      title () {
        return _.upperFirst(npm.name)
      },
      subtitle () {
        let description = `${npm.description}.`
        _.forEach(npm.keywords, (keyword) => {
          description = _.replace(description, keyword, `<span class="tag is-white is-medium">${keyword}</span>`)
        })
        return description
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .title,
  .subtitle {
    text-align: center;
    line-height: 2.25rem;
  }

  .subtitle {
    margin-top: -0.5rem !important;
  }

  .tag {
    margin-top: -0.25rem;
  }
</style>
