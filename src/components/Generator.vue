<template lang="pug">
  .columns
    .column.is-8.is-offset-2
      transition-group(enter-active-class="animated fadeIn",
                       leave-active-class="animated fadeOut")
        v-message(key="transition-item-1", v-show="message")
        .columns(key="transition-item-2")
          .column.is-6
            .columns
              .column.is-12
                v-settings
          .column.is-6
            v-example
</template>

<script>
  import { mapGetters } from 'vuex'
  import Settings from '@/components/Settings'
  import Example from '@/components/Example'
  import Message from '@/components/Message'

  export default {
    name: 'v-generator',
    components: {
      'v-example': Example,
      'v-message': Message,
      'v-settings': Settings
    },
    computed: mapGetters([
      'message'
    ])
  }
</script>
