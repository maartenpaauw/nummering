<template lang="pug">
  #app
    v-hero
    section.section
      .container
        router-view
    v-footer
</template>

<script>
  import Footer from '@/components/Footer'
  import Hero from '@/components/Hero'

  export default {
    name: 'app',
    components: {
      'v-footer': Footer,
      'v-hero': Hero
    },
    created () {
      document.title = `${this.$t('hero.title')} — ${this.$t('hero.subtitle').replace(/<(?:.|\n)*?>/gm, '')}`
    }
  }
</script>

<style lang="scss">
  @import "../node_modules/bulma/bulma.sass";
  @import "../node_modules/font-awesome/css/font-awesome.min.css";
  @import "../node_modules/animate.css/animate.min.css";

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
