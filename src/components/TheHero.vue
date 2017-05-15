<template>
  <section class="hero is-medium is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2" v-html="title"></h1>
        <h2 class="subtitle" v-html="subtitle"></h2>
      </div>
    </div>
  </section>
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

<style lang="scss">
  .title, .subtitle {
    text-align: center
  }

  .subtitle {
    margin-top: -0.5rem !important;
  }

  .tag {
    margin-top: -0.25rem;
  }
</style>
