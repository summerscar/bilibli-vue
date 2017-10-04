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

//右侧排行
const rank = {
  rankYesterday: 'http://www.bilibili.com/index/ranking.json',
  rankWeek: 'http://www.bilibili.com/index/ranking-week.json',
  rankThreeDay: 'http://www.bilibili.com/index/ranking-3day.json'
}

module.exports = {imageUrl, banner, defaultWord, rank}
