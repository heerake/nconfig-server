"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SocketWrapper {
    constructor(socket, areaID, env) {
        this.socket = socket;
        this.areaID = areaID;
        this.env = env;
    }
    update(key, value) {
        this.socket.emit('update', { key, value });
    }
}
function getSocketType(areaID, env) {
    if (areaID instanceof SocketWrapper) {
        return getSocketType(areaID.areaID, areaID.env);
    }
    return `${areaID}_${env}`;
}
exports.getSocketType = getSocketType;
exports.default = SocketWrapper;
//# sourceMappingURL=socketwrapper.js.map