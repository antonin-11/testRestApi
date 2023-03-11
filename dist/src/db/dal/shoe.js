"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shoe_1 = require("../models/shoe");
const error_1 = require("../../error");
class ShoeDal {
    static async create(input) {
        return await shoe_1.default.create(input);
    }
    static async update(id, input) {
        const result = await shoe_1.default.findByPk(id);
        if (result === null) {
            throw new error_1.DbError('Not found');
        }
        const shoe = result;
        return await shoe.update(input);
    }
    static async upsert(input) {
        return await shoe_1.default.upsert(input);
    }
    static async getById(id) {
        const result = await shoe_1.default.findByPk(id);
        if (result === null) {
            throw new error_1.DbError('Not found');
        }
        return result;
    }
    static async getByUrl(url) {
        const result = await shoe_1.default.findOne({
            where: { url }
        });
        if (result === null) {
            return false;
        }
        return true;
    }
    static async deleteById(id) {
        return await shoe_1.default.destroy({
            where: { id }
        });
    }
}
exports.default = ShoeDal;
//# sourceMappingURL=shoe.js.map