import socket from 'socket.io'
import SocketWrapper from './socketwrapper'

interface ClientSet {
  [areaID: string]: SocketWrapper[]
}

class ClientManager {
  private clientSet: ClientSet
  constructor() {
    this.clientSet = {}
  }
  addClient(socket: socket.Socket, areaID: string) {
    this.clientSet[areaID] = this.clientSet[areaID] || []

    this.clientSet[areaID].push(new SocketWrapper(socket, areaID))
  }
  removeClient(socket: socket.Socket, areaID: string) {
    this.clientSet[areaID] = this.clientSet[areaID] && this.clientSet[areaID].filter(t => t.socket !== socket)
  }
  update(areaID: string) {
    this.clientSet[areaID] && this.clientSet[areaID].forEach(t => {
      t.update()
    })
  }
}

const clientmManager = new ClientManager()

export default clientmManager