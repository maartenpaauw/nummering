<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          Gemaakt met <span class="fa fa-heart heart"></span> door <a class="is-dark name" :href="email" v-html="name"></a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
  import * as npm from '../../package.json'

  export default {
    name: 'the-footer',
    data () {
      return {
        name: npm.author.name,
        email: `mailto:${npm.author.email}`
      }
    }
  }
</script>

<style lang="scss">
  @import "../../node_modules/bulma/sass/utilities/variables";

  .heart {
    color: $red;
    margin-top: 0.15rem;
  }

  .name {
    color: $grey-dark
  }
</style>
