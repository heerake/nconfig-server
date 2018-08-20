import socket from 'socket.io'
import http from 'http'
import Koa from 'koa'
import clientManager from './client'
import Env from '../data/env';

export default function (app: Koa) {
  let server = http.createServer(app.callback())
  let io = socket(server)

  io.of('/registry').on('connection', (socket) => {
    let areaID: string, env: Env
    console.log('registry connect')

    socket.on('init', data => {
      areaID = data.id
      env = data.env
      clientManager.addClient(socket, areaID, env)
    })

    socket.on('disconnect', () => {
      clientManager.removeClient(socket, areaID, env)
    })
  })

  return server
}
