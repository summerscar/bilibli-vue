<template>
  <div class="baseItem" v-if="item">
    <a :href="'https://www.bilibili.com/video/av'+ item.aid +'/'" target="_blank">
      <img v-lazy="solveImgUrl(item.pic)" width="160" height="100">
      <div class="mask">
        <div class="detail">
          <div class="play">{{sec2Time(item.duration)}}</div>
        </div>
        <div class="looklater"></div>
      </div>
      <div class="title">{{item.title}}
        <div class="detail">
          <span class="view"><span class="icon"></span> {{num2Wan(item.stat.view)}}</span>
          <span class="danmaku"><span class="icon"></span> {{num2Wan(item.stat.danmaku)}}</span>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
  import {sec2Time, solveImgUrl, num2Wan} from '@/common/js/utils'

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
      solveImgUrl,
      num2Wan
    }
  }
</script>

<style lang="scss" scoped>
  @import "../common/style/variable";

  div.baseItem {
    width: 160px;
    height: 148px;
    position: relative;
    border-radius: 5px;
    padding-bottom: 20px;
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
        bottom: 68px;
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
      div.type {
        position: absolute;
        right: 0;
        bottom: 68px;
        font-size: 12px;
        color: #ffffff;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 5px 0 5px 0;
        padding: 2px 4px;
        opacity: 1;
      }
      div.title {
        transition: all 0.4s;
        padding-top: 10px;
        font-size: 12px;
        line-height: 20px;
        overflow: hidden;
        height: 40px;
        position: relative;
        div.detail {
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          font-size: 12px;
          background-color: #ffffff;
          overflow: hidden;
          transition: all .3s;
          span.icon {
            height: 12px;
            width: 12px;
            display: inline-block;
            vertical-align: middle;
            position: relative;
            top:-1px;
          }
          span.view {
            color: $fontDark;
            display: inline-block;
            width: 85px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            vertical-align: top;
            span {
              background-image: url(//s1.hdslb.com/bfs/static/webssr/home/images/icons.png);
              background-position: -282px -90px;
            }
          }
          span.danmaku {
            color: $fontDark;
            display: inline-block;
            vertical-align: top;
            span {
              background-image: url(//s1.hdslb.com/bfs/static/webssr/home/images/icons.png);
              background-position: -282px -218px;
            }
          }
        }
      }
      &:hover{
        div.text {
          visibility: hidden;
        }
        div.title{
          color: $hoverBlue;
          div.detail {
            bottom: -20px;
          }
        }
        div.type {
          opacity: 0;
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
