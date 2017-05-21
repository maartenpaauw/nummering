<template lang="pug">
  .modal(v-bind:class="{ 'is-active': about }")
    .modal-background(@click="toggle")
    .modal-content
      .card
        .card-content
          .content
            p(v-html="body")
    button.modal-close(@click="toggle")
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'v-about',
    computed: {
      ...mapGetters([
        'about'
      ]),
      body () {
        return this.$t('about.body')
      }
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
