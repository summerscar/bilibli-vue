<template>
  <div class="BilibiliTitle">
    <span class="BlibiliIcon" :style="{backgroundPosition: posX+'px '+posY+'px'}"></span>
    <span class="title"><a href="">{{title}}</a></span>
    <span class="status"></span>
    <span class="promote">客官，请问您要来点表情包吗？</span>
    <div class="nowStatus">
      <button class="status"><span class="statusIcon"></span><b>18745</b>条新动态</button>
      <button class="more"><span class="more">更多</span><span class="icon"> ></span></button>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    props: {
      title: {
        type: String,
        default: 'Title'
      },
      posX: {
        type: Number,
        default: 0
      },
      posY: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../common/style/variable";

  div.BilibiliTitle {
    padding-bottom: 15px;
    span.BlibiliIcon {
      position: relative;
      vertical-align: bottom;
      display: inline-block;
      height: 40px;
      width: 40px;
      background-image: url(http://static.hdslb.com/images/base/icons.png);
      top:4px;
    }
    span.title {
      vertical-align: bottom;
      font-size: 24px;
      line-height: 24px;
    }
    span.promote {
      font-size: 12px;
      color: $fontDarker;
      padding-left: 40px;
    }
    div.nowStatus {
      margin-top: 10px;
      float: right;
      button {
        background-color: #ffffff;
        outline: 0;
        border: 1px solid $btnHover;
        font-size: 12px;
        padding: 3px 8px;
        border-radius: 4px;
        cursor: pointer;
        &.more {
          span.more {
            display: inline-block;
            transform: translateX(0);
            transition: all 0.3s;
          }
          span.icon {
            display: inline-block;
            transform: translateX(0);
            transition: all 0.3s;
          }
        }
        &.status {
          span.statusIcon {
            margin-right: 5px;
            vertical-align: top;
            display: inline-block;
            height: 13px;
            width: 12px;
            margin-top: 2px;
            transform: rotate(0deg);
            transition: all 0.5s;
            background-image: url(//s1.hdslb.com/bfs/static/webssr/home/images/icons.png);
            background-position: -475px -89px;
          }
        }
        &:hover {
          background-color: #ccd0d7;
          span.more {
            transform: translateX(-2px);
          }
          span.icon {
            transform: translateX(2px);
          }
          span.statusIcon {
            transform: rotate(360deg);
          }
        }
      }
    }
  }
</style>
