<template lang="pug">
  #app
    v-header
    v-menu
    v-about
    v-hero
    section.section
      .container
        router-view
    v-footer
</template>

<script>
  import About from '@/components/About'
  import Footer from '@/components/Footer'
  import Header from '@/components/Header'
  import Hero from '@/components/Hero'
  import Menu from '@/components/Menu'

  export default {
    name: 'app',
    components: {
      'v-about': About,
      'v-footer': Footer,
      'v-header': Header,
      'v-hero': Hero,
      'v-menu': Menu
    }
  }
</script>

<style lang="scss">
  @import "../node_modules/bulma/bulma.sass";
  @import "../node_modules/font-awesome/css/font-awesome.min.css";

  * {
    &::selection {
      background: $turquoise;
      color: #fff;
    }
  }
</style>
