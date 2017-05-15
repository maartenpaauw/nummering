<template>
  <div id="app">
    <the-header></the-header>
    <the-hero></the-hero>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-offset-2 is-8">
            <the-message></the-message>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </section>
    <the-footer></the-footer>
  </div>
</template>

<script>
  import TheFooter from '@/components/TheFooter'
  import TheMessage from '@/components/TheMessage'
  import TheHeader from '@/components/TheHeader'
  import TheHero from '@/components/TheHero'

  export default {
    name: 'app',
    components: {
      TheFooter,
      TheMessage,
      TheHeader,
      TheHero
    }
  }
</script>

<style lang="scss">
  @import "../node_modules/bulma/bulma.sass";
  @import "../node_modules/font-awesome/css/font-awesome.min.css";

  html {
    /*overflow-y: hidden;*/
  }
</style>
