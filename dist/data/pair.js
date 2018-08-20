"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const valueitem_1 = __importDefault(require("./valueitem"));
class Pair {
    constructor(key) {
        this.key = key;
        this.values = [];
    }
    set(value) {
        let newValueItem = new valueitem_1.default(value);
        this.values.push(newValueItem);
    }
    get() {
        return this.values[this.values.length - 1];
    }
}
exports.default = Pair;
//# sourceMappingURL=pair.js.map