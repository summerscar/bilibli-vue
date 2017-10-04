import {url} from '@/common/js/url'

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

const solveImgUrl = (imgUrl) => {
  return url.getImg + imgUrl.split('/').slice(4).join('/')
}

export {throttle, solveImgUrl}

