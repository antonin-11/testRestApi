"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionController = void 0;
const common_1 = require("@nestjs/common");
const extension_service_1 = require("../services/extension.service");
const add_dto_1 = require("../dto/add.dto");
const body_dto_1 = require("../dto/body.dto");
let ExtensionController = class ExtensionController {
    constructor(extensionService) {
        this.extensionService = extensionService;
    }
    getExtensionBody() {
        return this.extensionService.getExtensionBody();
    }
    async AddShoe(Shoe) {
        return this.extensionService.Addshoe(Shoe);
    }
    async getShoe(data) {
        return this.extensionService.getShoes(data);
    }
};
__decorate([
    (0, common_1.Get)('products'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ExtensionController.prototype, "getExtensionBody", null);
__decorate([
    (0, common_1.Post)('addproducts'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_dto_1.ShoeDto]),
    __metadata("design:returntype", Promise)
], ExtensionController.prototype, "AddShoe", null);
__decorate([
    (0, common_1.Post)('getproducts'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [body_dto_1.BodyDto]),
    __metadata("design:returntype", Promise)
], ExtensionController.prototype, "getShoe", null);
ExtensionController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [extension_service_1.ExtensionService])
], ExtensionController);
exports.ExtensionController = ExtensionController;
//# sourceMappingURL=extension.controller.js.map