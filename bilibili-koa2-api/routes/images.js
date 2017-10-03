const router = require('koa-router')()
const request = require('request-promise')
const {imageUrl} = require('../url')

router.prefix('/image')

router.get('/header.png', async (ctx, next) => {
  let image = await request({url: imageUrl.header, encoding: null})
  ctx.type = 'image/png'
  ctx.body = image
})

router.get('/logo.png', async (ctx, next) => {
  let image = await request({url: imageUrl.logo, encoding: null})
  ctx.type = 'image/png'
  ctx.body = image
})

router.get('/mengzhan1.png', async (ctx, next) => {
  let image = await request({url: imageUrl.mengzhan1, encoding: null})
  ctx.type = 'image/png'
  ctx.body = image
})

router.get('/mengzhan2.png', async (ctx, next) => {
  let image = await request({url: imageUrl.mengzhan2, encoding: null})
  ctx.type = 'image/png'
  ctx.body = image
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
