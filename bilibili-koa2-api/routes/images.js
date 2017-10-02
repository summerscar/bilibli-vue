const router = require('koa-router')()
const request = require('request-promise');

router.prefix('/image')

router.get('/header.png', async (ctx, next) => {
  let image = await request({url: 'http://i0.hdslb.com/bfs/archive/7194f83fcb011b609f354e27d7188c29586df444.png', encoding: null})
  ctx.type = 'image/png'
  ctx.body = image
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
