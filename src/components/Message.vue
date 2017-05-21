<template lang="pug">
  article.message.is-warning(v-show="message")
    .message-header
      p(v-html="title")
      button.delete(@click="hide")
    .message-body(v-html="body")
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'v-message',
    computed: {
      ...mapGetters([
        'message'
      ]),
      title () {
        return this.$t('message.title')
      },
      body () {
        return this.$t('message.body')
      }
    },
    methods: {
      hide () {
        this.$store.dispatch('toggleMessage', {
          value: false
        })
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .message-body {
    overflow-y: hidden;
  }
</style>
