"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyError = void 0;
class BaseError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
class BodyError extends BaseError {
}
exports.BodyError = BodyError;
;
//# sourceMappingURL=error.js.map