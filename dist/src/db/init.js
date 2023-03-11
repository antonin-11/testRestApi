"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shoe_1 = require("./models/shoe");
async function dbinit() {
    await shoe_1.default.sync({
        alter: true
    });
}
exports.default = dbinit;
//# sourceMappingURL=init.js.map