import socket from 'socket.io'
import http from 'http'
import Koa from 'koa'
import clientmManager from './client'

export default function (app: Koa) {
  let server = http.createServer(app.callback())
  let io = socket(server)

  io.of('/registry').on('connection', (socket) => {
    let areaID: string;
    console.log('registry connect')

    socket.on('init', id => {
      areaID = id;
      clientmManager.addClient(socket, areaID)
    })

    socket.on('disconnect', () => {
      clientmManager.removeClient(socket, areaID)
    })
  })

  return server
}
