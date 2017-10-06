<template>
  <div id="bilibili">
    <div class="bannerRank">
      <bilibili-banner :dataArr="banner" :delay="4000" class="banner"></bilibili-banner>
      <bilibili-rank></bilibili-rank>
    </div>
    <div class="main_body">

      <bilibili-wrap :posX="-141" :posY="-75" title="推广" :promoteData="promoteData"></bilibili-wrap>

      <bilibili-wrap :posX="-141" :posY="-652" title="正在直播" :liveData="liveData"></bilibili-wrap>

     <!-- <bilibili-wrap :posX="-141" :posY="-908" title="动画" :zoneData="allData[1]" :rankData="zoneRank[1]"></bilibili-wrap>-->
      <bilibili-wrap v-for="(item, index) in zoneOrigin" :posX="-141" :posY="-908"
                     :title="zoneMap[item]" :zoneData="allData[item]"
                     :rankData="zoneRank[item]" :key="index">

      </bilibili-wrap>

      <bilibili-wrap :posX="-141" :posY="-780" title="特别推荐" :recommendData="recommendData"></bilibili-wrap>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {url} from '@/common/js/url'
  import {solveImgUrl} from '@/common/js/utils'
  import BilibiliBanner from '@/base/BilibiliBanner'
  import BilibiliRank from '@/components/BilibiliRank'
  import BilibiliWrap from '@/components/BilibiliWrap'

  export default {
    name: '',
    data () {
      return {
        banner: [],
        promoteData: [],
        recommendData: [],
        liveData: {},
        allData: {},
        zoneRank: {},
        zoneOrigin: [1, 3, 4, 5, 11, 13, 23, 36, 119, 129, 155, 160, 165, 168],
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
        }
      }
    },
    mounted () {
      this.getBanner()
      this.getPromote()
      this.getRecommend()
      this.getLive()
      this.getAllData()
      this.getZoneRank()
    },
    methods: {
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
          let {data: {rank: {list: res}}} = await axios.get(url.zoneRank + '&type=all&content=' + this.zoneOrigin[i] + '&duration=3')
          tmpObj[this.zoneOrigin[i]] = res.splice(0, 7)
        }
        this.zoneRank = tmpObj
        console.log('各分区排行数据', this.zoneRank)
      },
      solveImgUrl
    },
    components: {
      BilibiliBanner,
      BilibiliRank,
      BilibiliWrap
    }
  }
</script>

<style  lang="scss" scoped>
  @import "../common/style/variable";

  #bilibili {
    max-width: $max-width;
    min-width: $min-width;
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
