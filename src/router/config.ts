import Router from 'koa-router'
import clientManager from '../register/client'
import areaManager from '../data/manager'

console.log('areaManager')
console.log(areaManager)

let router = new Router({
  prefix: '/config'
})

router.get('/', async (ctx, next) => {
  let areas = areaManager.getAllAreas()

  await ctx.render('config/all')
  await next()
})

/**
 * body = {
 *  id
 *  env
 *  key
 *  value
 * }
 */
router.post('/area/additem', async (ctx, next) => {
  console.log(areaManager)
  console.log(areaManager.getAllAreas())
  console.log(areaManager.set)
  let body = ctx.request.body as any
  areaManager.set(body.id, body.env, body.key, body.value)
  await next()
})

// router.post('/client/registry', async (ctx, next) => {

// })

export default router