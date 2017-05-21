<template lang="pug">
  nav.nav
    span.nav-toggle(@click="toggle", v-bind:class="{ 'is-active': menu }")
      span
      span
      span
    .nav-menu.nav-right(v-bind:class="{ 'is-active': menu }")
      a.nav-item(@click="showAbout")
        span.is-hidden-tablet(v-html="aboutUs")
        span.icon.is-hidden-mobile
          i.fa.fa-question-circle
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    'name': 'v-menu',
    computed: {
      ...mapGetters([
        'menu',
        'about'
      ]),
      aboutUs () {
        return this.$t('menu.about_us')
      }
    },
    methods: {
      toggle () {
        this.$store.dispatch('toggleMenu', {
          value: !this.menu
        })
      },
      showAbout () {
        this.$store.dispatch('toggleAbout', {
          value: !this.about
        })
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  @import "../../node_modules/bulma/sass/utilities/variables";

  .nav {
    background-color: $white-ter;

    .icon {
      color: $grey-lighter;
    }
  }
</style>
