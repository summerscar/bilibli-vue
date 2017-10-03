<template>
  <div id="app">
    <bilibili-header></bilibili-header>
    <router-view></router-view>
    <bilibili-footer></bilibili-footer>
  </div>
</template>

<script>
  import BilibiliHeader from '@/components/BilibiliHeader'
  import BilibiliFooter from '@/components/BilibiliFooter'

  export default {
    name: 'app',
    components: {
      BilibiliHeader,
      BilibiliFooter
    }
  }
</script>

<style lang="scss">
#app {

}
</style>
