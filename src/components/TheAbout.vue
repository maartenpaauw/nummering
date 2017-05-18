<template lang="pug">
  .modal(v-bind:class="{ 'is-active': about }")
    .modal-background(@click="toggle")
    .modal-content
      .card
        header.card-header
          p.card-header-title Dit project
        .card-content
          .content
            p Volgt binnenkort.
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
