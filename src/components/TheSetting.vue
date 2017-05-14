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
        const value = () => {
          if (this.type === 'number') {
            return parseInt(e.target.value)
          } else {
            return e.target.value
          }
        }
        this.$store.dispatch('updateSetting', {
          setting: this.setting,
          value: value()
        })
      }
    }
  }
</script>

<style>

</style>
