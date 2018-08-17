import socket from 'socket.io'
import http from 'http'
import Koa from 'koa'

export default function (app: Koa) {
  let server = http.createServer(app.callback())
  let io = socket(server)

  io.of('/registry').on('connection', (socket) => {
    //socket.emit('get')
    console.log('on connect')

    sockets.push(socket)

    socket.on('get', (arg) => {
      return +new Date()
    })

    socket.on('disconnect', () => {
      sockets = sockets.filter(t => t !== socket)
    })

    setTimeout(() => {
      socket.emit('post', { d: 1 });
    }, 5000)
  })
}

let sockets: socket.Socket[] = []
let config = 0
app.use(async (ctx) => {
  ctx.body = `<html><head><script src="https://cdn.jsdelivr.net/npm/socket.io-client@2.1.1/dist/socket.io.js"></script></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">hello</pre></body></html>`

  if (ctx.path === '/add') {
    config++

    sockets.forEach(s => {
      s.emit('change', config)
    })
  }
})

io.of('/registry').on('connection', (socket) => {
  //socket.emit('get')
  console.log('on connect')

  sockets.push(socket)

  socket.on('get', (arg) => {
    return +new Date()
  })

  socket.on('disconnect', () => {
    sockets = sockets.filter(t => t !== socket)
  })

  setTimeout(() => {
    socket.emit('post', { d: 1 });
  }, 5000)
})

server.listen('41892')
