import socket from 'socket.io'
import http from 'http'
import Koa from 'koa'
import clientManager from './client'
import areaManager from '../data/manager'
import EnvEnum from '../enum/EnvEnum'

export default function (app: Koa) {
  let server = http.createServer(app.callback())
  let io = socket(server)

  io.of('/registry').on('connection', (socket) => {
    let areaID: string, env: EnvEnum
    console.log('registry connect')

    socket.on('init', data => {
      areaID = data.id
      env = data.env
      clientManager.addClient(socket, areaID, env)

      let kvObj = Object.values(areaManager.getArea(areaID).getEnv(env)).reduce((o: any, t) => {
        o[t.key] = t.get()
        return o
      }, {})

      socket.emit('initdata', kvObj)
    })

    socket.on('disconnect', () => {
      clientManager.removeClient(socket, areaID, env)
    })

    socket.on('get', key => {
      return areaManager.get(areaID, env, key)
    })

    socket.on('getalldata', () => {
      let kvObj = Object.values(areaManager.getArea(areaID).getEnv(env)).reduce((o: any, t) => {
        o[t.key] = t.get()
        return o
      }, {})

      return kvObj
    })
  })

  return server
}
