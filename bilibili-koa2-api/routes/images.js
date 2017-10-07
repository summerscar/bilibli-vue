const router = require('koa-router')()
const request = require('request-promise')
const {imageUrl} = require('../url')
const redis = require('../redis')

//  router.prefix('/image')

router.get('/image/mengzhan1.png', async (ctx, next) => {
  let image = await request({url: imageUrl.mengzhan1, encoding: null})
  ctx.type = 'image/png'
  ctx.body = image
})

router.get('/image/mengzhan2.png', async (ctx, next) => {
  let image = await request({url: imageUrl.mengzhan2, encoding: null})
  ctx.type = 'image/png'
  ctx.body = image
})

router.get('/image/menuGif.gif', async (ctx, next) => {
  let image = await request({url: imageUrl.menuGif, encoding: null})
  ctx.type = 'image/gif'
  ctx.body = image
})

//  处理传来图片

router.get(/^\/image\/dynamic(?:\/|$)/, async (ctx, next) => {
  let url = ctx.url.split('/').slice(3).join('/')
  let cache = await redis.client.getAsync(url)
  if (!cache) {
    let image = await request({url: imageUrl.imgPrefix + ctx.url.split('/').slice(3).join('/'), encoding: null})
    redis.set(url, image.toString('base64'))
    ctx.type = 'image/png'
    ctx.body = image
  } else {
    console.log('读取redis图片缓存')
    ctx.type = 'image/png'
    ctx.body = new Buffer(cache, 'base64')
  }
})

module.exports = router
