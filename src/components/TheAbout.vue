<template lang="pug">
  .modal(v-bind:class="{ 'is-active': about }")
    .modal-background(@click="toggle")
    .modal-content
      .card
        .card-content
          .content
            p Binnenkort
    button.modal-close(@click="toggle")
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'the-about',
    computed: {
      ...mapGetters([
        'about'
      ])
    },
    methods: {
      toggle () {
        this.$store.dispatch('toggleAbout', {
          value: !this.about
        })
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .content {
    text-align: center;
    text-transform: uppercase;
  }
</style>
