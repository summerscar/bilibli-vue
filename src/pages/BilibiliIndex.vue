<template>
  <div id="bilibili">
    <div class="bannerRank">
      <bilibili-banner :dataArr="banner" :delay="4000" class="banner"></bilibili-banner>
      <bilibili-rank></bilibili-rank>
    </div>
   <bilibili-wrap :posX="-141" :posY="-75"></bilibili-wrap>
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
        banner: []
      }
    },
    mounted () {
      this.getBanner()
    },
    methods: {
      async getBanner () {
        let {data: {data: res}} = await axios.get(url.banner)
        this.banner = res.map((item) => {
          item.pic = solveImgUrl(item.pic)
          return item
        })
        console.log('轮播图数据', this.banner)
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
      div.banner{
        float: left;
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
