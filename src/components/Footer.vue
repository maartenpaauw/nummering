<template lang="pug">
  footer.footer
    .container
      .content.has-text-centered
        p {{ created_with }}
          span.fa.fa-heart.heart
          | {{ created_by }}
          a.is-dark.name(:href="email", v-html="name")
</template>

<script>
  export default {
    name: 'v-footer',
    data () {
      return {
        name: 'Maarten Paauw',
        email: `mailto:maartenpaauw@gmail.com`
      }
    },
    computed: {
      created_with () {
        return `${this.$t('footer.created_with')} `
      },
      created_by () {
        return ` ${this.$t('footer.created_by')} `
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
