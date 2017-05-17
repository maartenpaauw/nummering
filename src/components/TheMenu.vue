<template lang="pug">
  nav.nav
    span.nav-toggle(@click='menu()')
      span
      span
      span
    .nav-menu.nav-right(v-bind:class="{ 'is-active': is_active }")
      a.nav-item
        | About
</template>

<script>
  export default {
    'name': 'the-menu',
    data () {
      return {
        is_active: false
      }
    },
    methods: {
      menu () {
        this.is_active = !this.is_active
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .nav {
    background-color: whitesmoke;
  }
</style>
