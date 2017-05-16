<template>
  <div class="nav">
    <div class="nav-center">
      <a class="nav-item" :href="github" target="_blank" :title="title">
        <span class="icon">
          <i class="fa fa-github"></i>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
  import * as npm from '../../package.json'
  import _ from 'lodash'

  export default {
    name: 'the-social',
    computed: {
      github () {
        return npm.repository.url
      },
      title () {
        return `${_.upperFirst(npm.name)} op GitHub`
      }
    }
  }
</script>

<style>

</style>
