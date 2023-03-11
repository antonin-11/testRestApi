"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractData = void 0;
const zalando_1 = require("./zalando");
const nike_1 = require("./nike");
const adidas_1 = require("./adidas");
const brand_1 = require("./brand");
function getZalandoData(str) {
    const zalando = new zalando_1.Zalando(str);
    return {
        price: zalando.getProductPrice(),
        product: zalando.getProduct(),
        type: zalando.getProductType(),
        color: zalando.getProductColor()
    };
}
function getNikeData(str) {
    const nike = new nike_1.Nike(str);
    return {
        price: nike.getProductPrice(),
        product: nike.getProduct(),
        type: nike.getProductType(),
        color: nike.getProductColor()
    };
}
function getAdidasData(str) {
    const adidas = new adidas_1.Adidas(str);
    return {
        price: adidas.getProductPrice(),
        product: adidas.getProduct(),
        type: adidas.getProductType(),
        color: adidas.getProductColor(),
        brand: adidas.brand
    };
}
function extractData(body) {
    let data = {};
    switch (body['site']) {
        case "zalando.fr":
            data = getZalandoData(body['body']);
            break;
        case "nike.com":
            data = getNikeData(body['body']);
            break;
        case "adidas.fr":
            data = getAdidasData(body['body']);
            break;
    }
    data['size'] = body['size'];
    if (data['brand'] === undefined)
        data['brand'] = new brand_1.Brand(data['product']).extractBrand();
    data['product'] = data['product'].toLowerCase().replace(data['brand'], '').trim();
    data['color'] = data['color'].toLowerCase();
    return data;
}
exports.extractData = extractData;
//# sourceMappingURL=body.js.map