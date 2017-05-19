<template lang="pug">
  nav.nav
    span.nav-toggle(@click="toggle", v-bind:class="{ 'is-active': menu }")
      span
      span
      span
    .nav-menu.nav-right(v-bind:class="{ 'is-active': menu }")
      a.nav-item(@click="showAbout") Dit project
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    'name': 'the-menu',
    computed: {
      ...mapGetters([
        'menu',
        'about'
      ])
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
  }
</style>
