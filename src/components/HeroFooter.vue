<template lang="pug">
  .hero-foot
    nav.tabs.is-boxed
      .container
        .columns
          .column.is-8.is-offset-2
            ul
              router-link(tag="li", active-class="is-active", :to="routeGenerate", exact="exact")
                a(v-html="generate")
              router-link(tag="li", active-class="is-active", :to="routeAbout")
                a(v-html="about")
              v-language
</template>

<script>
  import Language from './Language.vue'

  export default {
    'name': 'v-menu',
    computed: {
      generate () {
        return this.$t('menu.generate')
      },
      about () {
        return this.$t('menu.about')
      },
      routeGenerate () {
        return { name: 'generator' }
      },
      routeAbout () {
        return { name: 'about' }
      }
    },
    components: {
      'v-language': Language
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .hero-foot {
    margin-top: 1.5rem;
  }

  .tabs {
    display: inherit;
    overflow-x: hidden;
    margin: 0 1.5rem;
  }
</style>
