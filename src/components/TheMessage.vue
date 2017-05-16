<template>
  <article class="message is-warning" v-show="visible">
    <div class="message-header">
      <p>Pas op!</p>
      <button class="delete" @click="hide()"></button>
    </div>
    <div class="message-body">
      Deze tool wordt gemaakt voor een schoolproject. Gebruik op eigen risico.
      Fouten kunnen gemeld worden op GitHub via de volgende link
      <a :href="url" v-html="url" target="_blank"></a> of door een e-mail
      te sturen naar <a :href="`mailto:${email}`" v-html="email" target="_blank"></a>.
    </div>
  </article>
</template>

<script>
  import * as npm from '../../package.json'

  export default {
    name: 'the-message',
    data () {
      return {
        visible: true
      }
    },
    computed: {
      url () {
        return npm.bugs.url
      },
      email () {
        return npm.bugs.email
      }
    },
    methods: {
      hide () {
        this.visible = false
      }
    }
  }
</script>

<style lang="scss">
  .message-body {
    overflow-y: hidden;
  }
</style>
