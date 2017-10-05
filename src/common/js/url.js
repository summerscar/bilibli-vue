const host = 'http://localhost:3000/'

export const url = {
  getImg: host + 'image/dynamic/',
  banner: host + 'banner',
  header: host + 'header',
  defaultWord: host + 'defaultWord',
  promote: host + 'promote',
  live: host + 'live',
  recommend: host + 'recommend',
  rankDay: 'https://api.imjad.cn/bilibili/v2/?get=rank&type=all&content=0&duration=1&new=true',
  rankThree: 'https://api.imjad.cn/bilibili/v2/?get=rank&type=all&content=0&duration=3&new=true',
  rankWeek: 'https://api.imjad.cn/bilibili/v2/?get=rank&type=all&content=0&duration=7&new=true'
}
