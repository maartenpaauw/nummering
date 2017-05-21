<template lang="pug">
  footer.footer
    .container
      .content.has-text-centered
        p
          | Gemaakt met #{" "}
          span.fa.fa-heart.heart
          | #{" "} door #{" "}
          a.is-dark.name(:href="email",
                         v-html="name")
</template>

<script>
  import * as npm from '../../package.json'

  export default {
    name: 'v-footer',
    data () {
      return {
        name: npm.author.name,
        email: `mailto:${npm.author.email}`
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  @import "../../node_modules/bulma/sass/utilities/variables";

  .heart {
    color: $red;
    margin-top: 0.15rem;
  }

  .name {
    color: $grey-dark;
  }
</style>
