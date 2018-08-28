import Router from 'koa-router'
import clientManager from '../register/client'
import areaManager from '../data/manager'
import EnvType from '../data/env'

let router = new Router({
  prefix: '/area'
})

router.post('/getall', async (ctx, next) => {

  ctx.body = Object.values(areaManager.getAllAreas())

  await next()
})

router.post('/add', async (ctx, next) => {
  let area = areaManager.addArea((ctx.request.body as any).id)
  ctx.body = area

  await next()
})

router.post('/delete', async (ctx, next) => {
  ctx.body = areaManager.deleteArea((ctx.request.body as any).id)
  await next()
})

//router.post()

export default router