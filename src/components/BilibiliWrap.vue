<template>
  <div class="bilibiliWrap">
    <div class="wrapLeft">
      <bilibili-title :posX="posX" :posY="posY"></bilibili-title>
    </div>
    <div class="wrapRight">
    </div>
  </div>
</template>

<script>
  import BilibiliTitle from '@/base/BilibiliTitle'
  export default {
    props: {
      posX: {
        type: Number,
        default: 0
      },
      posY: {
        type: Number,
        default: 0
      }
    },
    name: '',
    components: {
      BilibiliTitle
    }
  }
</script>

<style lang="scss" scoped>
  @import "../common/style/variable";
  div.bilibiliWrap {
    width: 100%;
    div.wrapLeft {
      width: 900px;
      float: left;
    }
    div.wrapRight {
      width: 260px;
      float: right;
    }
  }
</style>
