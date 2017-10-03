<template>
  <div class="primary_menu">
    <div class="menu">
      <ul>
        <li>
          <a href="">
            <div class="status index"></div>
            <div class="title">首页</div>
          </a>
        </li>
        <li>
          <a>
            <div class="status">999+</div>
            <div class="title">动画</div>
          </a>
        </li>
        <li>
          <a>
            <div class="status">93</div>
            <div class="title">番剧</div>
          </a>
        </li>
        <li>
          <a>
            <div class="status">98</div>
            <div class="title">国创</div>
          </a>
        </li>
        <li>
          <a>
            <div class="status">999+</div>
            <div class="title">音乐</div>
          </a>
        </li>
        <li>
          <a>
            <div class="status">180</div>
            <div class="title">舞蹈</div>
          </a>
        </li>
        <li>
          <a>
            <div class="status">999+</div>
            <div class="title">游戏</div>
          </a>
        </li>
        <li>
          <a>
            <div class="status">734</div>
            <div class="title">科技</div>
          </a>
        </li>
        <li>
          <a>
            <div class="status">999+</div>
            <div class="title">生活</div>
          </a>
        </li>
        <li>
          <a>
            <div class="status">98</div>
            <div class="title">鬼畜</div>
          </a>
        </li>
        <li>
          <a>
            <div class="status">354</div>
            <div class="title">时尚</div>
          </a>
        </li>
        <li>
          <a>
            <div class="status">98</div>
            <div class="title">广告</div>
          </a>
        </li>
        <li>
          <a>
            <div class="status">999+</div>
            <div class="title">娱乐</div>
          </a>
        </li>
        <li>
          <a>
            <div class="status">999+</div>
            <div class="title">影视</div>
          </a>
        </li>
        <li>
          <a>
            <div class="status zhuanlan"></div>
            <div class="title">专栏</div>
          </a>
        </li>
        <li>
          <a>
            <div class="status guangchang">999+</div>
            <div class="title">广场</div>
          </a>
        </li>
        <li>
          <a>
            <div class="status zhibo"></div>
            <div class="title">直播</div>
          </a>
        </li>
        <li>
          <a>
            <div class="status xiaoheiwu"></div>
            <div class="title">小黑屋</div>
          </a>
        </li>
      </ul>
    </div>
    <div class="gif">
      <a href="">
      <img src="http://localhost:3000/image/menuGif.gif" alt="">
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: ''
  }
</script>

<style lang="scss" scoped>
  @import "../common/style/variable";
  div.primary_menu {
    font-size: 12px;
    padding-top: 10px;
    div.menu {
      display: inline-block;

      ul {

        li {
          padding-right: 30px;
          float: left;
          position: relative;

          div.status {
            width: 30px;
            line-height: 13px;
            margin: 8px 0 4px;
            background-color: $BpinkLight;
            color: white;
            border-radius: 4px;
            text-align: center;

            &:nth-child(1).index {
              margin: 0;
              width: 25px;
              height:26px;
              background: url(//s1.hdslb.com/bfs/static/webssr/home/images/icons.png) -660px -1170px no-repeat;
            }
            &.zhuanlan {
              margin: 0;
              width: 25px;
              height:26px;
              background: url(//s1.hdslb.com/bfs/static/webssr/home/images/icons.png) -83px -1809px no-repeat;
            }
            &.guangchang {
              margin: 0;
              width: 25px;
              height:26px;
              background: url(//s1.hdslb.com/bfs/static/webssr/home/images/icons.png) -83px -2001px no-repeat;
            }
            &.zhibo {
              margin: 0;
              width: 25px;
              height:26px;
              background: url(//s1.hdslb.com/bfs/static/webssr/home/images/icons.png) -83px -1874px no-repeat;
            }
            &.xiaoheiwu {
              margin: 0;
              width: 25px;
              height:26px;
              background: url(//s1.hdslb.com/bfs/static/webssr/home/images/icons.png) -79px -1939px no-repeat;
            }
          }
          div.title {
            text-align: center;
          }
        }
        &:after {
          content: ',';
          width: 0;
          height: 0;
          clear: both;
          visibility: hidden;
          display: block;
        }
      }
    }
    div.gif {
      display: inline-block;
      vertical-align: top;
    }
  }
</style>
