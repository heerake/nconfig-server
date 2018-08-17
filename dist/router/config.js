"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const client_1 = __importDefault(require("../register/client"));
let router = new koa_router_1.default({
    prefix: '/config'
});
router.get('/', async (ctx) => {
    ctx.body = '123';
});
router.get('/:id', async (ctx) => {
    client_1.default.update(ctx.params.id);
});
exports.default = router;
//# sourceMappingURL=config.js.map