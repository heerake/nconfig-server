"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socketwrapper_1 = __importDefault(require("./socketwrapper"));
class ClientManager {
    constructor() {
        this.clientSet = {};
    }
    addClient(socket, areaID) {
        this.clientSet[areaID] = this.clientSet[areaID] || [];
        this.clientSet[areaID].push(new socketwrapper_1.default(socket, areaID));
    }
    removeClient(socket, areaID) {
        this.clientSet[areaID] = this.clientSet[areaID] && this.clientSet[areaID].filter(t => t.socket !== socket);
    }
    update(areaID) {
        this.clientSet[areaID] && this.clientSet[areaID].forEach(t => {
            t.update();
        });
    }
}
const clientmManager = new ClientManager();
exports.default = clientmManager;
//# sourceMappingURL=client.js.map