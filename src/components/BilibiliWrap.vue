<template>
  <div class="bilibiliWrap">
    <div class="wrapLeft">
      <bilibili-title :posX="posX" :posY="posY"></bilibili-title>
      <div class="videoWarp">
        <div v-for="(item, index) in promoteData" v-if="promoteData.length">
          <promote-item :item="item"></promote-item>
        </div>
      </div>
    </div>
    <div class="wrapRight">
      <slot name="status"></slot>
    </div>
  </div>
</template>

<script>
  import BilibiliTitle from '@/base/BilibiliTitle'
  import PromoteItem from '@/base/PromoteItem'

  export default {
    props: {
      promoteData: {
        type: Array,
        default: []
      },
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
      BilibiliTitle,
      PromoteItem
    }
  }
</script>

<style lang="scss" scoped>
  @import "../common/style/variable";
  div.bilibiliWrap {
    width: 100%;
    display: flex;
    div.wrapLeft {
      width: 900px;
      padding-right: 20px;
      box-sizing: border-box;
      div.videoWarp {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
    div.wrapRight {
      width: 260px;
      padding-top: 10px;
      div.status {
        width: 100%;
        font-size: 12px;
        background-color: $fontGrey;
        color: $fontDark;
        padding: 9px 5px;
        text-align: center;
        border-radius: 5px;
        display: flex;
        justify-content: space-around;
        box-sizing: border-box;
        margin-bottom: 10px;
        span {
          display: block;
        }
      }
    }
  }
</style>
