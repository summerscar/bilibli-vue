<template>
  <div class="rank">
    <div class="itemWarp" v-for="item in rankData" v-if="rankData.length">
      <rank-item :item="item"></rank-item>
    </div>
    <div class="arrow-left" @click="dataLeft">{{rankArr[rankIndex % 3]}}</div>
    <div class="arrow-right" @click="dataRight">{{rankArr[(rankIndex + 1) % 3]}}</div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {url} from '@/common/js/url'
  import {rdNum} from '@/common/js/utils'
  import RankItem from '@/base/RankItem'

  export default {
    name: '',
    data () {
      return {
        rankData: [],
        rankArr: ['昨日', '三日', '一周'],
        rankIndex: 0
      }
    },
    created () {
      this.getData()
    },
    methods: {
      dataLeft () {
        this.rankIndex --
        this.getData(true)
      },
      dataRight () {
        this.rankIndex ++
        this.getData()
      },
      getData (boolean = false) {
        if (boolean) {
          this.rankData = []
        }
        try {
          if (this.rankIndex % 3 === 0) {
            this.getRankDay()
            console.log('昨日数据')
          } else if (this.rankIndex % 3 === 1) {
            this.getRankThree()
            console.log('三日数据')
          } else {
            this.getRankWeek()
            console.log('一周数据')
          }
        } catch (e) {
          console.log(e)
        }
      },
      async getRankDay () {
        let {data: {rank: {list: res}}} = await axios.get(url.rankDay)
        let rdnum = rdNum(0, 92)
        let tempArr = res.slice(rdnum, rdnum + 8)
        this.rankData = tempArr
      },
      async getRankThree () {
        let {data: {rank: {list: res}}} = await axios.get(url.rankThree)
        let rdnum = rdNum(0, 92)
        let tempArr = res.slice(rdnum, rdnum + 8)
        this.rankData = tempArr
      },
      async getRankWeek () {
        let {data: {rank: {list: res}}} = await axios.get(url.rankWeek)
        let rdnum = rdNum(0, 92)
        let tempArr = res.slice(rdnum, rdnum + 8)
        this.rankData = tempArr
      }
    },
    components: {
      RankItem
    }
  }
</script>

<style lang="scss" scoped>
  @import "../common/style/variable";

    div.rank {
      position: relative;
      width: 720px;
      height: 220px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding-left: 20px;
      box-sizing: border-box;
      align-content: space-between;
      &:hover {
        div.arrow-left, div.arrow-right {
          visibility: visible;
          opacity: 1;
        }
      }
      div.arrow-left {
        visibility: hidden;
        transition: opacity 0.3s;
        opacity: 0;
        cursor: pointer;
        position: absolute;
        left: 20px;
        bottom: 30%;
        color: #ffffff;
        font-size: 12px;
        width: 20px;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 0 5px 5px 0;
        text-align: right;
        padding: 8px 10px;
        background-position: 6px -1213px;
        background-image: url(//s1.hdslb.com/bfs/static/webssr/home/images/icons2.png);
      }
      div.arrow-right {
        transition: opacity 0.3s;
        visibility: hidden;
        opacity: 0;
        cursor: pointer;
        position: absolute;
        right: 0;
        bottom: 30%;
        color: #ffffff;
        font-size: 12px;
        width: 20px;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 5px 0 0 5px;
        text-align: left;
        padding: 8px 10px;
        background-position: 25px -1265px;
        background-image: url(//s1.hdslb.com/bfs/static/webssr/home/images/icons2.png);
      }
    }



</style>
