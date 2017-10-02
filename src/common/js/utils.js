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

export {throttle}

