<template>
  <div id="app">
    <bilibili-header></bilibili-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import BilibiliHeader from '@/components/BilibiliHeader'

  export default {
    name: 'app',
    components: {
      BilibiliHeader
    }
  }
</script>

<style lang="scss">
#app {

}
</style>
