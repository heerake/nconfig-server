import Router from 'koa-router'
import clientMananger from '../register/client'

let router = new Router({
  prefix: '/config'
})

router.get('/', async ctx => {
  ctx.body = '123'
})

router.get('/:id', async ctx => {
  clientMananger.update(ctx.params.id)
})

export default router