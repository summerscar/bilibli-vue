<template>
  <div class="promoteItem" v-if="item">
    <a :href="'https://www.bilibili.com/video/av'+ item.archive.aid +'/'" target="_blank">
      <img :src="solveImgUrl(item.pic)" width="160" height="100">
      <div class="mask">
        <div class="detail">
          <div class="play">{{sec2Time(item.archive.duration)}}</div>
        </div>
        <div class="looklater"></div>
      </div>
      <div class="title">{{item.name}}</div>
    </a>
  </div>
</template>

<script>
  import {sec2Time, solveImgUrl} from '@/common/js/utils'

  export default {
    name: '',
    props: {
      item: {
        type: Object,
        default: null
      }
    },
    data () {
      return {
      }
    },
    methods: {
      sec2Time,
      solveImgUrl
    }
  }
</script>

<style lang="scss" scoped>
  @import "../common/style/variable";

  div.promoteItem {
    width: 160px;
    height: 148px;
    position: relative;
    border-radius: 5px;
    a {
      border-radius: 5px;
      font-size: 0;
      display: block;
      img {
        border-radius: 5px;
      }
      div.mask {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 48px;
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 5px;
        opacity: 0;
        transition: all 0.4s;
        div.detail {
          position: absolute;
          bottom: 0;
          left: 0;
          line-height: 18px;
          font-size: 12px;
          box-sizing: border-box;
          color: white;
          padding-left: 8px;
          padding-bottom: 2px;
          opacity: 0;
          transition: all 0.4s;
        }
        div.looklater {
          width: 22px;
          height: 22px;
          position: absolute;
          right: 6px;
          bottom: 4px;
          cursor: pointer;
          background-image: url(//s1.hdslb.com/bfs/static/webssr/home/images/watchlater-1.png);
          &:hover:after {
            display: block;
          }
          &:after {
            content: '稍后再看';
            background-color: black;
            font-size: 12px;
            color: #ffffff;
            padding: 3px 5px;
            position: absolute;
            left: -75%;
            top: -27px;
            display: none;
            border-radius: 5px;
            width: 50px;
          }
        }
      }
      div.title {
        transition: all 0.4s;
        padding-top: 10px;
        font-size: 12px;
        line-height: 20px;
        overflow: hidden;
        height: 40px;
      }
      &:hover{
        div.text {
          visibility: hidden;
        }
        div.title{
          color: $hoverBlue;
        }
        div.mask {
          opacity: 1;
          div.detail {
            opacity: 1;
          }
        }
      }
    }
  }

</style>
