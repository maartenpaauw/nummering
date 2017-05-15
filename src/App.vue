<template>
  <div id="app">
    <the-header></the-header>
    <the-hero></the-hero>
    <section class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>
    <the-footer></the-footer>
  </div>
</template>

<script>
  import TheFooter from '@/components/TheFooter'
  import TheHeader from '@/components/TheHeader'
  import TheHero from '@/components/TheHero'

  export default {
    name: 'app',
    components: {
      TheFooter,
      TheHeader,
      TheHero
    }
  }
</script>

<style lang="scss">
  @import "../node_modules/bulma/bulma.sass";
  @import "../node_modules/font-awesome/css/font-awesome.min.css";
</style>
