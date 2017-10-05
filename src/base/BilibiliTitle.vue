<template>
  <div class="BilibiliTitle">
    <span class="BlibiliIcon" :style="{backgroundPosition: posX+'px '+posY+'px'}"></span>
    <span class="title">推广</span>
    <span class="status"></span>
    <span class="promote">客官，请问您要来点表情包吗？</span>
  </div>
</template>

<script>
  export default {
    name: '',
    props: {
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
  }
</style>
