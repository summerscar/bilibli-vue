<template>
  <div id="bilibili">
    <bilibili-banner :dataArr="banner" :delay="4000"></bilibili-banner>
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
        banner: [],
        rankDay: [],
        rankThree: [],
        rankWeek: []
      }
    },
    mounted () {
      this.getBanner()

      this.getRankDay()
/*
      this.getRankThree()
      this.getRankWeek()
*/
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
      async getRankDay () {
        let {data: {rank: {list: res}}} = await axios.get(url.rankDay)
        let key = []
        let tempArr = []
        while (key.length < 8) {
          let num = Math.random() * 100 | 0
          if (key.indexOf(num) !== -1) return
          key.push(num)
        }
        key.forEach((item) => {
          tempArr.push(res[item])
        })
        this.rankDay = tempArr
      },
      async getRankThree () {
        let {data: {rank: {list: res}}} = await axios.get(url.rankThree)
        let key = []
        let tempArr = []
        while (key.length < 8) {
          let num = Math.random() * 100 | 0
          if (key.indexOf(num) !== -1) return
          key.push(num)
        }
        key.forEach((item) => {
          tempArr.push(res[item])
        })
        this.rankThree = tempArr
      },
      async getRankWeek () {
        let {data: {rank: {list: res}}} = await axios.get(url.rankWeek)
        let key = []
        let tempArr = []
        while (key.length < 8) {
          let num = Math.random() * 100 | 0
          if (key.indexOf(num) !== -1) return
          key.push(num)
        }
        key.forEach((item) => {
          tempArr.push(res[item])
        })
        this.rankWeek = tempArr
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
