"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shoe_1 = require("../dal/shoe");
class ShoeService {
    static async create(input) {
        return shoe_1.default.create(input);
    }
    static async update(id, input) {
        return shoe_1.default.update(id, input);
    }
    static async upsert(input) {
        return shoe_1.default.upsert(input);
    }
    static async getById(id) {
        return shoe_1.default.getById(id);
    }
    static async getByUrl(url) {
        return shoe_1.default.getByUrl(url);
    }
    static async deleteById(id) {
        return shoe_1.default.deleteById(id);
    }
}
exports.default = ShoeService;
//# sourceMappingURL=shoeService.js.map