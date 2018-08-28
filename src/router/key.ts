import Router from 'koa-router'
import areaManager from '../data/manager'
import clientManager from '../register/client'
import _ from 'lodash'

let router = new Router({
  prefix: '/key'
})

router.post('/get', async (ctx, next) => {
  let body = ctx.request.body,
    areaid = _.get(body, 'areaid'),
    env = _.get(body, 'env'),
    key = _.get(body, 'key')

  if (areaid && env) {
    ctx.body = areaManager.get(areaid, env, key)
  }

  await next()
})

router.post('/gethistory', async (ctx, next) => {
  let body = ctx.request.body,
    areaid = _.get(body, 'areaid'),
    env = _.get(body, 'env'),
    key = _.get(body, 'key')

  if (areaid && env) {
    ctx.body = areaManager.getArea(areaid).getEnv(env)[key]
  }

  await next()
})

router.post('/set', async (ctx, next) => {
  let body = ctx.request.body,
    areaid = _.get(body, 'areaid'),
    env = _.get(body, 'env'),
    key = _.get(body, 'key'),
    value = _.get(body, 'value')

  if (areaid && env) {
    areaManager.set(areaid, env, key, value)
  }

  //clientManager.update(areaid, env, key, value)

  ctx.body = 1

  await next()
})

router.post('/delete', async (ctx, next) => {
  let body = ctx.request.body,
    areaid = _.get(body, 'areaid'),
    env = _.get(body, 'env'),
    key = _.get(body, 'key')

  delete areaManager.getArea(areaid).getEnv(env)[key]

  ctx.body = 1

  await next()
})

//router.post()

export default router