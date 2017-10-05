<template>
  <div id="bilibili">
    <div class="bannerRank">
      <bilibili-banner :dataArr="banner" :delay="4000" class="banner"></bilibili-banner>
      <bilibili-rank></bilibili-rank>
    </div>
    <div class="promote">
      <bilibili-wrap :posX="-141" :posY="-75" :promoteData="promoteData">
        <div slot="status">
          <div class="status">
            <span>在线人数：1346260</span>|<span>最新投稿：12215</span>
          </div>
          <div class="ad">
            <a target="_blank" href="//cm.bilibili.com/cm/api/fees/pc/sync/v2?msg=a%7C30%2Cb%7Cbilibili%2Cc%7C1%2Cd%7C1%2Ce%7CCKAiEAAYkgwgACgAMAM4HkIeMTUwNzE3MTM2NTE1MXExNzJhMThhNjFhMjUwcTg1SJ%2Fip9PuK1IJ5Y2X5Lqs5biCWgnmsZ%2Foi4%2FnnIFiBuS4reWbvWgBcAB4AIABAIgB6wWSAQ0xNTMuMy4xNjkuMTYymgEHZGVmYXVsdKABAKgBALIBIM%2FaEoDhdZhDQNLjJVi1CZXns7G8cY3Tf2kg19l8sLDvugEkaHR0cDovL2d3ZHouYmlsaWdhbWUuY29tLyMhbmV3c2xpc3Qv%2Cf%7Cclick_sync_3%2Cg%7C1%2Ch%7C1%2Ci%7C5248611%2Cj%7C%2Ck%7C1507171366215%2Cl%7C29%2Cm%7C1507171364291%2Cn%7C1%2Co%7C&amp;ts=1507171366215" data-target-url="http://gwdz.biligame.com/#!newslist/">
              <img src="https://i0.hdslb.com/bfs/sycp/tmaterial/201709/9fad75ff78d0cc10a93d0a2840f94787.jpg" alt="" width="260" height="150" class="pic">
            </a>
          </div>
        </div>
      </bilibili-wrap>
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
        promoteData: []
      }
    },
    mounted () {
      this.getBanner()
      this.getPromote()
    },
    methods: {
      async getBanner () {
        let {data: {data: res}} = await axios.get(url.banner)
        this.banner = res.map((item) => {
          item.pic = solveImgUrl(item.pic)
          return item
        })
        console.log('轮播图数据', this.banner)
      },
      async getPromote () {
        let {data: res} = await axios.get(url.promote)
        res.map((item) => {
          item.pic = solveImgUrl(item.pic)
          return item
        })
        this.promoteData = res
        console.log('推广数据', this.promoteData)
      }
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
