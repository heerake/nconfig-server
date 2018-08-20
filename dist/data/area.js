"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = __importDefault(require("./env"));
const pair_1 = __importDefault(require("./pair"));
class Area {
    constructor(areaID) {
        this.id = areaID;
        this.env = {
            [env_1.default.Dev]: {},
            [env_1.default.Prd]: {}
        };
    }
    getEnv(envType) {
        return this.env[envType];
    }
    get(env, key) {
        return this.getEnv(env)[key].get();
    }
    set(env, key, value) {
        (this.getEnv(env)[key] = this.getEnv(env)[key] || new pair_1.default(key)).set(value);
    }
    getAllEnv() {
        return this.env;
    }
}
exports.default = Area;
//# sourceMappingURL=area.js.map