"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbError = void 0;
class BaseError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
class DbError extends BaseError {
}
exports.DbError = DbError;
;
//# sourceMappingURL=error.js.map