<template lang="pug">
  section.hero.is-medium.is-primary
    v-hero-header
    v-hero-body
    v-hero-footer
</template>

<script>
  import HeroBody from '@/components/HeroBody'
  import HeroFooter from '@/components/HeroFooter'
  import HeroHeader from '@/components/HeroHeader'

  export default {
    name: 'v-hero',
    components: {
      'v-hero-body': HeroBody,
      'v-hero-header': HeroHeader,
      'v-hero-footer': HeroFooter
    }
  }
</script>
