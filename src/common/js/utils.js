import {url} from '@/common/js/url'

//  节流函数
const throttle = (fn, delay = 500) => {
  let timer = null
  return (function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function () {
      fn()
    }, delay)
  })()
}

//  处理图片地址至后台
const solveImgUrl = (imgUrl) => {
  return url.getImg + imgUrl.split('/').slice(4).join('/')
}
//  生成随机数
const rdNum = (n, m) => {
  const c = m - n + 1
  return Math.floor(Math.random() * c + n)
}

const sec2Time = (time) => {
  let min = (time / 60) | 0
  min = min < 10 ? `0${min}` : min
  let sec = (time % 60)
  sec = sec < 10 ? `0${sec}` : sec
  return `${min}:${sec}`
}

export {throttle, solveImgUrl, rdNum, sec2Time}

