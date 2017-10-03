<template>
  <div id="bilibili">
    <bilibili-banner :dataArr="banner" :delay="4000" @change = 'showIndex'></bilibili-banner>
  </div>
</template>

<script>
  import axios from 'axios'
  import {url} from '@/common/js/url'
  import {solveImgUrl} from '@/common/js/utils'
  import BilibiliBanner from '@/base/BilibiliBanner'

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
      },
      showIndex (index) {
        console.log('轮播图', index)
      }
    },
    components: {
      BilibiliBanner
    }
  }
</script>

<style  lang="scss" scoped>
  #bilibili {
    width: 1160px;

  }
</style>
