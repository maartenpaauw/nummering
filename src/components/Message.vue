<template lang="pug">
  article.message.is-warning(v-show="message")
    .message-header
      p Pas op!
      button.delete(@click="hide")
    .message-body Deze tool wordt gemaakt voor een schoolproject. Gebruik op eigen risico. #{" "}
      | Fouten kunnen gemeld worden op GitHub via de volgende link #{" "}
      a(:href="url", v-html="url", target="_blank")
      | #{" "} of door een e-mail te sturen naar #{" "}
      a(:href="`mailto:${email}`", v-html="email", target="_blank")
      | .
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as npm from '../../package.json'

  export default {
    name: 'v-message',
    computed: {
      ...mapGetters([
        'message'
      ]),
      url () {
        return npm.bugs.url
      },
      email () {
        return npm.bugs.email
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
