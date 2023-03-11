"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionService = void 0;
const common_1 = require("@nestjs/common");
const shoeService_1 = require("../db/services/shoeService");
const body_1 = require("../../lib/body/body");
const search_1 = require("../vinted/search");
let ExtensionService = class ExtensionService {
    getExtensionBody() {
        return 'Hello from ExtensionBody';
    }
    async Addshoe(shoe) {
        await shoeService_1.default.create({
            title: shoe.title,
            description: shoe.description,
            price: shoe.price,
            brand: shoe.brand,
            size: shoe.size,
            state: shoe.state,
            color: shoe.color,
            date: shoe.date,
            rating: shoe.rating,
            last_update: shoe.last_update,
            url: shoe.url,
            picture_url: shoe.picture_url,
            platform: "vinted",
            country: "FR",
            sold: false,
        });
        return true;
    }
    async getShoes(body) {
        let data = (0, body_1.extractData)(body);
        const vintedSearch = new search_1.default(data);
        const ads = await vintedSearch.getSearchVinted();
        return ads;
    }
};
ExtensionService = __decorate([
    (0, common_1.Injectable)()
], ExtensionService);
exports.ExtensionService = ExtensionService;
//# sourceMappingURL=extension.service.js.map