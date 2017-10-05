<template>
  <div class="bilibiliWrap">
    <div class="wrapLeft">
      <bilibili-title :posX="posX" :posY="posY" :title="title"></bilibili-title>
      <!--推广-->
      <div class="videoWarp" v-if="promoteData.length">
        <promote-item v-for="(item, index) in promoteData" :key="index" :item="item"></promote-item>
      </div>
      <!--底部推荐-->
      <div class="videoWarp" v-if="recommendData.length">
        <recommend-item v-for="(item, index) in recommendData" :key="index" :item="item"></recommend-item>
      </div>
      <!--直播-->
      <div class="videoWarp" v-if="liveData">
        <live-item v-for="(item, index) in liveData.recommend" :key="index" :item="item"></live-item>
      </div>

    </div>
    <div class="wrapRight">
      <!--直播排行榜-->
      <live-rank v-if="liveData"></live-rank>

      <div class="statusWarp">
        <slot name="status"></slot>
      </div>

      <slot name="ad"></slot>

    </div>
  </div>
</template>

<script>
  import BilibiliTitle from '@/base/BilibiliTitle'
  import PromoteItem from '@/base/PromoteItem'
  import RecommendItem from '@/base/RecommendItem'
  import LiveItem from '@/base/LiveItem'
  import LiveRank from '@/base/LiveRank'

  export default {
    props: {
      title: {
        type: String,
        default: 'Title'
      },
      promoteData: {
        type: Array,
        default: function () {
          return []
        }
      },
      recommendData: {
        type: Array,
        default: function () {
          return []
        }
      },
      liveData: {
        type: Object,
        default: null
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
      PromoteItem,
      RecommendItem,
      LiveItem,
      LiveRank
    }
  }
</script>

<style lang="scss" scoped>
  @import "../common/style/variable";
  div.bilibiliWrap {
    width: 100%;
    display: flex;
    padding-bottom: 30px;
    div.wrapLeft {
      width: 900px;
      padding-right: 20px;
      box-sizing: border-box;
      div.videoWarp {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
    }
    div.wrapRight {
      width: 260px;
      padding-top: 10px;
      img {
        border-radius: 5px;
      }
      div.statusWarp {
        height: 34px;
        width: 100%;
        margin-bottom: 10px;

        div.status {
          height: 34px;
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

          span {
            display: block;
          }
        }
      }

    }
  }
</style>
