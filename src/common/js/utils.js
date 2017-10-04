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

export {throttle, solveImgUrl, rdNum}

