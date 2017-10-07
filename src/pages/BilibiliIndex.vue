<template>
  <div id="bilibili" ref="bilibili">
    <div class="bannerRank">
      <bilibili-banner :dataArr="banner" :delay="4000" class="banner"></bilibili-banner>
      <bilibili-rank></bilibili-rank>
    </div>
    <div class="main_body" v-if="allData && zoneRank">

      <bilibili-wrap :posX="-141" :posY="-75" title="推广" :promoteData="promoteData" :promoteAd="promoteAd"></bilibili-wrap>

      <bilibili-wrap :posX="-141" :posY="-652" title="正在直播" :liveData="liveData"></bilibili-wrap>

<!--
      <bilibili-wrap :posX="-141" :posY="-908" :zoneType="1" title="动画" :zoneData="allData[1]" :rankData="zoneRank[1]"></bilibili-wrap>
-->
      <bilibili-wrap v-for="(item, index) in zoneOrigin" :posX="-141" :posY="zoneIcon[item]"
                     :title="zoneMap[item]" :zoneData="allData[item]"
                     :rankData="zoneRank[item]" :zoneType="item" :key="index"
                     @change="showChange" :ref="'wrap'+item"
                     @itemHover="showItemHover" @itemLeave="showItemLeave">

      </bilibili-wrap>

      <bilibili-wrap :posX="-141" :posY="-780" title="特别推荐" :recommendData="recommendData"></bilibili-wrap>
    </div>
    <!--视频详细信息弹窗-->
    <transition name="fade">
      <video-detail v-if="itemHoverData" :itemHoverData="itemHoverData"></video-detail>
    </transition>
    <bilibili-elevator :zoneOrigin="zoneOrigin" :zoneMap="zoneMap"
                       :elevatorLeft="elevatorLeft" :elevatorActive="elevatorActive"
                       @elevatorClick="elevatorClick"></bilibili-elevator>
  </div>
</template>

<script>
  import axios from 'axios'
  import {url} from '@/common/js/url'
  import {solveImgUrl} from '@/common/js/utils'
  import BilibiliBanner from '@/base/BilibiliBanner'
  import BilibiliRank from '@/components/BilibiliRank'
  import BilibiliWrap from '@/components/BilibiliWrap'
  import BilibiliElevator from '@/components/BilibiliElevator'
  import VideoDetail from '@/base/VideoDetail'

  export default {
    name: '',
    data () {
      return {
        banner: [],
        promoteData: [],
        promoteAd: null,
        recommendData: [],
        liveData: null,
        allData: null,
        zoneRank: null,
        zoneOrigin: [1, 3, 4, 5, 11, 13, 23, 36, 119, 129, 155, 160, 165, 168],
        itemHoverData: null,
        zoneIcon: {
          1: -908, 3: -266, 4: -203, 5: -1032, 11: -845, 13: -140, 23: -396, 36: -525, 119: -332, 129: -461, 155: -718, 160: -970, 165: -1228, 168: -140
        },
        zoneMap: {
          1: '动画',
          3: '音乐',
          4: '游戏',
          5: '娱乐',
          11: '电视剧',
          13: '番剧动态',
          23: '电影',
          36: '科技',
          119: '鬼畜',
          129: '舞蹈',
          155: '时尚',
          160: '生活',
          165: '广告',
          168: '国创相关'
        },
        elevatorLeft: 0,
        elevatorActive: 0
      }
    },
    mounted () {
      this.getBanner()
      this.getPromote()
      this.getPromoteAd()
      this.getRecommend()
      this.getLive()
      this.getAllData()
      this.getZoneRank()
      this.elevatorLeft = this.$refs.bilibili.getBoundingClientRect().right
      window.addEventListener('resize', () => {
        this.elevatorLeft = this.$refs.bilibili.getBoundingClientRect().right
      })
      document.addEventListener('scroll', () => {
        this.zoneOrigin.forEach((item) => {
          let top = this.$refs['wrap' + item][0].$el.getBoundingClientRect().top
          if (top < 300 && top > -10) {
            this.elevatorActive = item
          }
        })
        if (document.documentElement.scrollTop < 840) {
          this.elevatorActive = 0
        }
      })
    },
    methods: {
      elevatorClick (item) {
        console.log('当前点击', this.zoneMap[item])
        this.$refs['wrap' + item][0].$el.scrollIntoView({block: 'start', behavior: 'smooth'})
      },
      getBilibiliPosition () {
        return this.$refs.bilibili.getBoundingClientRect()
      },
      showItemLeave () {
        this.itemHoverData = null
        console.log('离开元素')
      },
      showItemHover (obj) {
        console.log('hover元素', obj)
        obj.position.x -= this.getBilibiliPosition().left
        obj.position.y = obj.position.y - 420
        this.itemHoverData = obj
      },
      showChange (data) {
        console.log(data)
        console.log('时间切换', data.time, '类别', data.type, '分区类别', this.zoneMap[data.zoneType])
        this.getWeekRank(data)
      },
      async getBanner () {
        let {data: {data: res}} = await axios.get(url.banner)
        this.banner = res
        console.log('轮播图数据', this.banner)
      },
      async getPromote () {
        let {data: res} = await axios.get(url.promote)
        this.promoteData = res
        console.log('推广数据', this.promoteData)
      },
      async getPromoteAd () {
        let {data: {data: [res]}} = await axios.get(url.promoteAd)
        this.promoteAd = res
        console.log('推广广告数据', this.promoteAd)
      },
      async getRecommend () {
        let {data: {list: res}} = await axios.get(url.recommend)
        this.recommendData = res.slice(0, 5)
        console.log('底部推荐数据', this.recommendData)
      },
      async getLive () {
        let {data: {data: res}} = await axios.get(url.live)
        this.liveData = res
        console.log('直播数据', this.liveData)
      },
      async getAllData () {
        let {data: {data: res}} = await axios.get(url.allData)
        this.allData = res
        console.log('各分区数据', this.allData)
      },
      async getZoneRank () {
        let tmpObj = {}
        for (let i = 0; i < this.zoneOrigin.length; i++) {
          let {data: {data: res}} = await axios.get(url.zoneRank + '&type=all&content=' + this.zoneOrigin[i] + '&duration=3')
          tmpObj[this.zoneOrigin[i]] = res.splice(0, 7)
        }
        this.zoneRank = tmpObj
        console.log('各分区排行数据', this.zoneRank)
      },
      async getWeekRank (data) {
        let {data: {data: res}} = await axios.get(`${url.zoneRank}&type=${data.type}&content=${data.zoneType}&duration=${data.time}`)
        this.zoneRank[data.zoneType] = res.slice(0, 7)
      },
      solveImgUrl
    },
    components: {
      BilibiliBanner,
      BilibiliRank,
      BilibiliWrap,
      VideoDetail,
      BilibiliElevator
    }
  }
</script>

<style  lang="scss" scoped>
  @import "../common/style/variable";

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  #bilibili {
    max-width: $max-width;
    min-width: $min-width;
    position: relative;
    div.bannerRank {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding-bottom: 40px;
      div.banner{

      }
      &:after {
        content: ',';
        display: block;
        visibility: hidden;
        height: 0;
        width: 0;
        clear: both;
      }
    }
  }
</style>
