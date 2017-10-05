<template>
  <div class="liveRank">
    <div class="header">
      <ul>
        <li>直播排行</li>
        <li>关注的主播</li>
        <li>为你推荐</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {solveImgUrl} from '@/common/js/utils'
  export default {
    name: '',
    methods: {
      solveImgUrl
    }
  }
</script>

<style lang="scss" scoped>
  @import "../common/style/variable";

  div.liveRank {
    div.header {
      ul {
        li {
          float: left;
          font-size: 12px;
        }
      }
    }
  }
</style>
