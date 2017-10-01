const throttle = (fn, delay) => {
  let timer = null
  return (function () {
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn()
    }, delay)
  })()
}

export {throttle}

