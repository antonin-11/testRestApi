"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brand = void 0;
const brandRegexList = [/nike/i, /adidas/i, /puma/i, /asics/i, /rebook/i, /vans/i, /converse/i, /new balance/i, /lotto/i, /hugo boss/i, /lacoste/i, /tommy hilfiger/i, /quechua/i, /geox/i, /azzaro/i, /birkenstock/i, /crocs/i, /calvin klein/i, /doc martens/i, /guess/i, /havaianas/i, /le coq sportif/i, /levi's/i, /palladium/i, /timberland/i, /valentino/i, /jordan/i];
class Brand {
    constructor(brand) {
        this.brand = brand;
    }
    extractBrand() {
        for (let i = 0; i < brandRegexList.length; i++) {
            if (brandRegexList[i].test(this.brand)) {
                return brandRegexList[i].source;
            }
        }
        return 'unknown';
    }
}
exports.Brand = Brand;
//# sourceMappingURL=brand.js.map