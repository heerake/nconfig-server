import socket from 'socket.io'

class SocketWrapper {
  socket: socket.Socket
  areaID: string
  constructor(socket: socket.Socket, areaID: string) {

    this.socket = socket
    this.areaID = areaID
  }
  update() {
    this.socket.emit('update', new Date())
  }
}

export default SocketWrapper