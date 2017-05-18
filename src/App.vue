<template lang="pug">
  #app
    the-header
    the-menu
    the-about
    the-hero
    section.section
      .container
        router-view
    the-footer
</template>

<script>
  import TheAbout from '@/components/TheAbout'
  import TheFooter from '@/components/TheFooter'
  import TheHeader from '@/components/TheHeader'
  import TheHero from '@/components/TheHero'
  import TheMenu from '@/components/TheMenu'

  export default {
    name: 'app',
    components: {
      TheAbout,
      TheFooter,
      TheHeader,
      TheHero,
      TheMenu
    }
  }
</script>

<style lang="scss">
  @import "../node_modules/bulma/bulma.sass";
  @import "../node_modules/font-awesome/css/font-awesome.min.css";
</style>
