<template>
  <div class="nav">
    <div class="nav-center">
      <a class="nav-item" :href="github" target="_blank">
        <span class="icon">
          <i class="fa fa-github"></i>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
  import * as npm from '../../package.json'

  export default {
    name: 'the-social',
    computed: {
      github () {
        return npm.repository.url
      }
    }
  }
</script>

<style>

</style>
