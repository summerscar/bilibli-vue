const router = require('koa-router')()
const request = require('request-promise')
const {promote} = require('../url')

router.prefix('/promote')

router.get('/', async (ctx, next) => {
  let res = await request(promote.default)
  ctx.body = res
})

router.get('/hot', async (ctx, next) => {
  let res = await request(promote.hot)
  ctx.body = res
})

module.exports = router
