import Koa from 'koa'
import register from './register/register'
import bodyParser from 'koa-bodyparser'
import configRouter from './router/console'
import areaRouter from './router/area'
import envRouter from './router/env'
import keyRouter from './router/key'
import render from 'koa-ejs'
import path from 'path'

const app = new Koa()

render(app, {
  root: path.join(__dirname, '../views'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: true
});

app.use(bodyParser())

app.use(async (ctx, next) => {
  //ctx.body = ctx.body = `<html><head><script src="https://cdn.jsdelivr.net/npm/socket.io-client@2.1.1/dist/socket.io.js"></script></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">hello</pre></body></html>`;
  await next()
})

app.use(configRouter.routes())
app.use(configRouter.allowedMethods())

app.use(areaRouter.routes())
app.use(areaRouter.allowedMethods())

app.use(envRouter.routes())
app.use(envRouter.allowedMethods())

app.use(keyRouter.routes())
app.use(keyRouter.allowedMethods())

let server = register(app)

server.listen('41892')
