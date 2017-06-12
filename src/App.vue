<template lang="pug">
  #app
    v-hero
    section.section
      .container
        router-view
    v-footer
</template>

<script>
  import { mapGetters } from 'vuex'
  import Footer from '@/components/Footer'
  import Hero from '@/components/Hero'

  export default {
    name: 'app',
    components: {
      'v-footer': Footer,
      'v-hero': Hero
    },
    computed: mapGetters('languages', [
      'i18n'
    ]),
    methods: {
      setLocale (locale) {
        this.$i18n.locale = locale
        document.title = `${this.$t('hero.title')} — ${this.$t('hero.subtitle').replace(/<(?:.|\n)*?>/gm, '')}`
      }
    },
    watch: {
      i18n (value) {
        this.setLocale(value)
      }
    },
    created () {
      this.setLocale(this.i18n)
    }
  }
</script>

<style lang="scss">
  @import "../node_modules/bulma/bulma.sass";
  @import "../node_modules/font-awesome/css/font-awesome.min.css";
  @import "../node_modules/animate.css/animate.min.css";
  @import "../node_modules/flag-icon-css/css/flag-icon.min.css";

  * {
    &::selection {
      background: $turquoise;
      color: #fff;
    }
  }

  html {
    overflow-y: auto;
  }
</style>
