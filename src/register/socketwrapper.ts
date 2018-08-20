import socket from 'socket.io'
import Env from '../data/env'

class SocketWrapper {
  socket: socket.Socket
  areaID: string
  env: Env
  constructor(socket: socket.Socket, areaID: string, env: Env) {

    this.socket = socket
    this.areaID = areaID
    this.env = env
  }
  update(key: string, value: string) {
    this.socket.emit('update', { key, value })
  }
}

function getSocketType(areaID: string | SocketWrapper, env: Env): string {
  if (areaID instanceof SocketWrapper) {
    return getSocketType(areaID.areaID, areaID.env)
  }

  return `${areaID}_${env}`
}

export default SocketWrapper
export { getSocketType }