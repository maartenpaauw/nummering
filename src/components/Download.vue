<template lang="pug">
  a.card-footer-item(@click="download_it", v-html="download")
</template>

<script>
  import { mapGetters } from 'vuex'
  import stream from '../stream/index'

  export default {
    name: 'v-download',
    computed: {
      ...mapGetters([
        'filename',
        'header',
        'range'
      ]),
      download () {
        return this.$t('settings.download')
      }
    },
    methods: {
      download_it () {
        stream(this.range, this.header, this.filename)
      }
    }
  }
</script>
