<template>
  <div class="field">
    <label class="label" v-html="label"></label>
    <p class="control">
      <input class="input" :type="type" :placeholder="placeholder" :value="value" @input="change" />
    </p>
  </div>
</template>

<script>
  export default {
    name: 'the-setting',
    props: ['label', 'setting', 'type', 'placeholder'],
    computed: {
      value () {
        return this.$store.getters[this.setting]
      }
    },
    methods: {
      change (e) {
        this.$store.dispatch('updateSetting', {
          setting: this.setting,
          value: this.getValue(e.target.value)
        })
      },
      getValue (value) {
        if (this.type === 'number') {
          return parseInt(value)
        } else {
          return value
        }
      }
    }
  }
</script>

<style lang="scss">

</style>
