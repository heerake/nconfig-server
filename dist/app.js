"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const register_1 = __importDefault(require("./register/register"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const config_1 = __importDefault(require("./router/config"));
const koa_ejs_1 = __importDefault(require("koa-ejs"));
const path_1 = __importDefault(require("path"));
const app = new koa_1.default();
koa_ejs_1.default(app, {
    root: path_1.default.join(__dirname, '../views'),
    layout: 'template',
    viewExt: 'html',
    cache: false,
    debug: true
});
app.use(koa_bodyparser_1.default());
app.use(async (ctx, next) => {
    ctx.body = ctx.body = `<html><head><script src="https://cdn.jsdelivr.net/npm/socket.io-client@2.1.1/dist/socket.io.js"></script></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">hello</pre></body></html>`;
    await next();
});
app.use(config_1.default.routes());
app.use(config_1.default.allowedMethods());
let server = register_1.default(app);
server.listen('41892');
//# sourceMappingURL=app.js.map