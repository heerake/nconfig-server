"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const area_1 = __importDefault(require("./area"));
const client_1 = __importDefault(require("../register/client"));
class AreaManager {
    constructor() {
        this.areas = {};
    }
    addArea(id) {
        return this.areas[id] = this.areas[id] || new area_1.default(id);
    }
    getArea(id) {
        return this.areas[id];
    }
    get(id, env, key) {
        let area = this.getArea(id);
        return area.get(env, key);
    }
    set(id, env, key, value) {
        let area = this.getArea(id);
        area.set(env, key, value);
        client_1.default.update(id, env, key, value);
    }
    getAllAreas() {
        return this.areas;
    }
}
let manager = new AreaManager();
manager.addArea('111');
exports.default = manager;
//# sourceMappingURL=manager.js.map