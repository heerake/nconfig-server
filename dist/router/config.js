"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const manager_1 = __importDefault(require("../data/manager"));
console.log('areaManager');
console.log(manager_1.default);
let router = new koa_router_1.default({
    prefix: '/config'
});
router.get('/', async (ctx, next) => {
    let areas = manager_1.default.getAllAreas();
    await ctx.render('config/all');
    await next();
});
/**
 * body = {
 *  id
 *  env
 *  key
 *  value
 * }
 */
router.post('/area/additem', async (ctx, next) => {
    console.log(manager_1.default);
    console.log(manager_1.default.getAllAreas());
    console.log(manager_1.default.set);
    let body = ctx.request.body;
    manager_1.default.set(body.id, body.env, body.key, body.value);
    await next();
});
// router.post('/client/registry', async (ctx, next) => {
// })
exports.default = router;
//# sourceMappingURL=config.js.map