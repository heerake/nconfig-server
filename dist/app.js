"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
const app = new koa_1.default();
let server = http_1.default.createServer(app.callback());
let io = socket_io_1.default(server);
let sockets = [];
let config = 0;
app.use(async (ctx) => {
    ctx.body = `<html><head><script src="https://cdn.jsdelivr.net/npm/socket.io-client@2.1.1/dist/socket.io.js"></script></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">hello</pre></body></html>`;
    if (ctx.path === '/add') {
        config++;
        sockets.forEach(s => {
            s.emit('change', config);
        });
    }
});
io.of('/registry').on('connection', (socket) => {
    //socket.emit('get')
    console.log('on connect');
    sockets.push(socket);
    socket.on('get', (arg) => {
        return +new Date();
    });
    socket.on('disconnect', () => {
        sockets = sockets.filter(t => t !== socket);
    });
    setTimeout(() => {
        socket.emit('post', { d: 1 });
    }, 5000);
});
server.listen('41892');
//# sourceMappingURL=app.js.map