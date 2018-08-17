import Koa from 'koa'
import register from './register/register'
import bodyParser from 'koa-bodyparser'
import configRouter from './router/config'

const app = new Koa()

app.use(bodyParser())

app.use(async (ctx, next) => {
  ctx.body = ctx.body = `<html><head><script src="https://cdn.jsdelivr.net/npm/socket.io-client@2.1.1/dist/socket.io.js"></script></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">hello</pre></body></html>`;
  await next()
})

app.use(configRouter.routes())
app.use(configRouter.allowedMethods())

let server = register(app)

server.listen('41892')
