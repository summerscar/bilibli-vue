const imageUrl = {
  imgPrefix: 'http://i0.hdslb.com/bfs/',
  header: 'https://api.bilibili.com/x/web-show/res/loc?pf=0&id=142&jsonp=jsonp&_=1507086094917',
  mengzhan1: 'https://i0.hdslb.com/bfs/bangumi/b2e080c557bff6870ed7c0ce8508318d86360206.jpg_280x85.jpg',
  mengzhan2: 'https://i0.hdslb.com/bfs/bangumi/e6a31c225e6762bfa2a5531887793687c358c82e.jpg_280x85.jpg',
  menuGif: 'http://i0.hdslb.com/bfs/active/d982254ba12cced5ccc2748be4f88b180de57ed4.gif'
}

//  轮播
const banner = 'http://api.bilibili.com/x/web-show/res/loc?jsonp=jsonp&pf=0&id=23&_=1482805801599'

//  搜索词
const defaultWord = 'http://www.bilibili.com/widget/getSearchDefaultWords'

//  第二行推广以及广告与每分区标题右侧小字推广
const promote = {
  default: 'https://api.bilibili.com/x/web-show/res/locs?pf=0&jsonp=jsonp&ids=23%2C34%2C29%2C31%2C40%2C42%2C44&_=1507105984369',
  ad: 'http://api.bilibili.com/x/web-show/res/loc?pf=0&id=29',
  hot: 'https://api.bilibili.com/x/web-show/res/locs?pf=0&jsonp=jsonp&ids=1550%2C1554%2C1556%2C1919%2C1558%2C1560%2C1562%2C1624%2C1564%2C1566%2C1568%2C1636%2C1570%2C1572%2C1574&_=1507086097872'
}

//  菜单数据
const menuData = 'https://api.bilibili.com/x/web-interface/online?jsonp=jsonp&_=1507086094756'

//  底层推荐
const recommend = 'https://api.imjad.cn/bilibili/v2/?get=recommend'

//  各分区数据
const AllData = 'https://api.bilibili.com/x/web-interface/dynamic/index?jsonp=jsonp&_=1507105986455'

//  直播数据
const live = 'http://api.live.bilibili.com/bili/recom'

//  动画时间线
const timeLine = {
  jp: 'https://bangumi.bilibili.com/jsonp/timeline_v2_global.ver?type=jsonp&_=1507086097896',
  zh: 'https://bangumi.bilibili.com/jsonp/timeline_v2_cn.ver?callback=gc_timeline&type=jsonp&_=1507086097899'
}

module.exports = {imageUrl, banner, defaultWord, promote, menuData, recommend, AllData, live, timeLine}
