<template lang="pug">
  section.hero.is-medium.is-primary
    v-hero-header
    v-hero-body
    v-hero-footer
</template>

<script>
  import Body from '@/components/Hero/Body'
  import Footer from '@/components/Hero/Footer'
  import Header from '@/components/Hero/Header'

  export default {
    name: 'v-hero',
    components: {
      'v-hero-body': Body,
      'v-hero-header': Header,
      'v-hero-footer': Footer
    }
  }
</script>
