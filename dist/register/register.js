"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
const client_1 = __importDefault(require("./client"));
function default_1(app) {
    let server = http_1.default.createServer(app.callback());
    let io = socket_io_1.default(server);
    io.of('/registry').on('connection', (socket) => {
        let areaID;
        console.log('registry connect');
        socket.on('init', id => {
            areaID = id;
            client_1.default.addClient(socket, areaID);
        });
        socket.on('disconnect', () => {
            client_1.default.removeClient(socket, areaID);
        });
    });
    return server;
}
exports.default = default_1;
//# sourceMappingURL=register.js.map