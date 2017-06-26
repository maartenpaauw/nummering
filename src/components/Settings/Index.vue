<template lang="pug">
  .card
    header.card-header
      h3.card-header-title(v-html="title")
    .card-content
      .content
        v-setting(v-for="(setting, index) in settings",
                  :key="index",
                  :setting="index")
    footer.card-footer
      v-download
      v-reset
</template>

<script>
  import { mapGetters } from 'vuex'
  import Setting from '@/components/Settings/Setting'
  import Reset from '@/components/Settings/Reset'
  import Download from '@/components/Settings/Download'

  export default {
    name: 'v-settings',
    components: {
      'v-download': Download,
      'v-reset': Reset,
      'v-setting': Setting
    },
    computed: {
      ...mapGetters('settings', [
        'settings'
      ]),
      title () {
        return this.$t('settings.title')
      }
    }
  }
</script>
