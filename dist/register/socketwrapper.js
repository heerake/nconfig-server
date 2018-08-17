"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SocketWrapper {
    constructor(socket, areaID) {
        this.socket = socket;
        this.areaID = areaID;
    }
    update() {
        this.socket.emit('update', new Date());
    }
}
exports.default = SocketWrapper;
//# sourceMappingURL=socketwrapper.js.map