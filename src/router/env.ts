import Router from 'koa-router'
import areaManager from '../data/manager'
import _ from 'lodash'

let router = new Router({
  prefix: '/env'
})

router.post('/getall', async (ctx, next) => {

  ctx.body = Object.keys(areaManager.getArea((ctx.request.body as any).areaid).getAllEnv())

  await next()
})

router.post('/get', async (ctx, next) => {
  let areaid = _.get(ctx.request.body, 'areaid'),
    env = _.get(ctx.request.body, 'env')

  if (areaid && env) {
    let envData = areaManager.getArea(areaid).getEnv(env)
    ctx.body = Object.values(envData).map(t => {
      return {
        key: t.key,
        value: t.get()
      }
    })
  }

  await next()
})

//router.post()

export default router