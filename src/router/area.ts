import Router from 'koa-router'
import clientManager from '../register/client'
import areaManager from '../data/manager'
import Env from '../data/env'

let router = new Router({
  prefix: '/area'
})

router.post('/getall', async (ctx, next) => {

  ctx.body = areaManager.getAllAreas()

  await next()
})

//router.post()

export default router