"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const socketwrapper_1 = __importStar(require("./socketwrapper"));
class ClientManager {
    constructor() {
        this.clientSet = {};
    }
    addClient(socket, areaID, env) {
        let socketType = socketwrapper_1.getSocketType(areaID, env);
        this.clientSet[socketType] = this.clientSet[socketType] || [];
        if (this.clientSet[socketType].every(t => t.socket.id !== socket.id)) {
            this.clientSet[socketType].push(new socketwrapper_1.default(socket, areaID, env));
        }
    }
    removeClient(socket, areaID, env) {
        let socketType = socketwrapper_1.getSocketType(areaID, env);
        this.clientSet[socketType] = this.clientSet[socketType] && this.clientSet[socketType].filter(t => t.socket !== socket);
    }
    update(areaID, env, key, value) {
        let socketType = socketwrapper_1.getSocketType(areaID, env);
        this.clientSet[socketType] && this.clientSet[socketType].forEach(t => {
            t.update(key, value);
        });
    }
}
const clientManager = new ClientManager();
exports.default = clientManager;
//# sourceMappingURL=client.js.map