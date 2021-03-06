import socket from 'socket.io'
import EnvEnum from '../enum/EnvEnum'

class SocketWrapper {
  socket: socket.Socket
  areaID: string
  env: EnvEnum
  constructor(socket: socket.Socket, areaID: string, env: EnvEnum) {

    this.socket = socket
    this.areaID = areaID
    this.env = env
  }
  update(key: string, value: string) {
    this.socket.emit('update', { key, value })
  }
}

function getSocketType(areaID: string | SocketWrapper, env: EnvEnum): string {
  if (areaID instanceof SocketWrapper) {
    return getSocketType(areaID.areaID, areaID.env)
  }

  return `${areaID}_${env}`
}

export default SocketWrapper
export { getSocketType }