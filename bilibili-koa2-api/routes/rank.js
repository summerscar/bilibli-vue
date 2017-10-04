const router = require('koa-router')()
const request = require('request-promise')
const {rank} = require('../url')

router.prefix('/rank')

router.get('/yesterday', async (ctx, next) => {
  let res = await request(rank.rankYesterday)
  ctx.body = res
})

router.get('/three', async (ctx, next) => {
  let res = await request(rank.rankThreeDay)
  ctx.body = res
})

router.get('/week', async (ctx, next) => {
  let res = await request(rank.rankWeek)
  ctx.body = res
})

module.exports = router
