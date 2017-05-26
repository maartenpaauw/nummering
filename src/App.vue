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
    mounted () {
      /* eslint-disable no-undef */
      (adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: 'ca-pub-7764800584863746',
        enable_page_level_ads: true
      })
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
