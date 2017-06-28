<template lang="pug">
  .columns
    .column.is-12
      article.message.is-warning
        .message-header
          p(v-html="title")
          button.delete(@click="toggle")
        .message-body(v-html="body")
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

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
      ...mapActions([
        'toggleMessage'
      ]),
      toggle () {
        this.toggleMessage(!this.message)
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .message-body {
    overflow-y: hidden;
  }
</style>
