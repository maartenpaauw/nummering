<template lang="pug">
  li.is-active
    a(@click="toggle")
      span.flag-icon(:class="flag")
</template>

<script>
  export default {
    name: 'v-language',
    data () {
      return {
        language: 0,
        languages: [
          { css_class: 'flag-icon-nl', i18n: 'nl_NL' },
          { css_class: 'flag-icon-us', i18n: 'en_US' }
        ]
      }
    },
    computed: {
      flag () {
        return this.languages[this.language].css_class
      }
    },
    methods: {
      toggle () {
        this.language < this.languages.length - 1 ? this.language++ : this.language = 0
        this.changeLanguage()
        this.setTitle()
      },
      setTitle () {
        document.title = `${this.$t('hero.title')} — ${this.$t('hero.subtitle').replace(/<(?:.|\n)*?>/gm, '')}`
      },
      changeLanguage () {
        this.$i18n.locale = this.languages[this.language].i18n
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  li {
    margin-left: auto;
  }

  span {
    padding: 0.27rem 0;
  }
</style>
