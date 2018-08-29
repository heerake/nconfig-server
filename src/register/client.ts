import socket from 'socket.io'
import SocketWrapper, { getSocketType } from './socketwrapper'
import EnvEnum from '../enum/EnvEnum'

interface ClientSet {
  [areaID: string]: SocketWrapper[]
}

class ClientManager {
  private clientSet: ClientSet
  constructor() {
    this.clientSet = {}
  }
  addClient(socket: socket.Socket, areaID: string, env: EnvEnum) {
    let socketType = getSocketType(areaID, env)
    this.clientSet[socketType] = this.clientSet[socketType] || []

    if (this.clientSet[socketType].every(t => t.socket.id !== socket.id)) {
      this.clientSet[socketType].push(new SocketWrapper(socket, areaID, env))
    }
  }
  removeClient(socket: socket.Socket, areaID: string, env: EnvEnum) {
    let socketType = getSocketType(areaID, env)
    this.clientSet[socketType] = this.clientSet[socketType] && this.clientSet[socketType].filter(t => t.socket !== socket)
  }
  update(areaID: string, env: EnvEnum, key: string, value: string) {
    let socketType = getSocketType(areaID, env)

    this.clientSet[socketType] && this.clientSet[socketType].forEach(t => {
      t.update(key, value)
    })
  }
}

const clientManager = new ClientManager()

export default clientManager