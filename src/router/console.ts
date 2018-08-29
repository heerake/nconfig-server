import Router from 'koa-router'
import clientManager from '../register/client'
import areaManager from '../data/manager'
import EnvEnum from '../enum/EnvEnum'

let router = new Router({
  prefix: '/console'
})

router.get('/:areaId', async (ctx, next) => {
  let areas = areaManager.getAllAreas()
  let curArea = areas[ctx.params.areaId]
  let curEnv = curArea.getEnv(ctx.params.env || EnvEnum.Dev)

  await (ctx as any).render('console/index', {
    pairs: curEnv
  })
  await next()
})

router.use(['/:areaId', '/:areaId/:env'], async (ctx, next) => {
  let areas = areaManager.getAllAreas()
  let curArea = areas[ctx.params.areaId]
  let curEnv = curArea.getEnv(ctx.params.env || EnvEnum.Dev)

  await (ctx as any).render('console/index', {
    pairs: curEnv
  })
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