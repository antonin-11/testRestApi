"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adidas = void 0;
class Adidas {
    constructor(body) {
        this.body = body;
        this.brand = 'adidas';
        this.globalDesc = this.getSubString();
    }
    getWordsIndexes(str, word) {
        let indexes = [], i = -1;
        while ((i = str.indexOf(word, i + 1)) != -1) {
            indexes.push(i);
        }
        return indexes;
    }
    getSubString() {
        let beginIndex = this.getWordsIndexes(this.body, ',"image"');
        this.globalDesc = this.body.substring(beginIndex.pop(), this.body.length);
        return this.globalDesc;
    }
    getProductPrice() {
        let priceIndex = this.getWordsIndexes(this.globalDesc, '"price"');
        let price = this.globalDesc.substring(priceIndex[0], this.globalDesc.length);
        price = price.substring(0, price.search(','));
        price = price.split(':').pop().trim();
        return Number(price);
    }
    getProduct() {
        let nameIndex = this.getWordsIndexes(this.globalDesc, '"name"');
        let name = this.globalDesc.substring(nameIndex[0], this.globalDesc.length);
        name = name.substring(0, name.search(','));
        name = name.split(':').pop().replaceAll('"', '').replaceAll('}', '').trim();
        if (name.includes('Chaussure')) {
            name = name.split('Chaussure').pop().trim();
        }
        return name;
    }
    getProductType() {
        let productIndex = this.getWordsIndexes(this.globalDesc, '"name"');
        let product = this.globalDesc.substring(productIndex[0], this.globalDesc.length);
        product = product.substring(0, product.search(','));
        product = product.split(':').pop().replaceAll('"', '').replaceAll('}', '').trim();
        if (product.includes('Chaussure')) {
            product = product.split(' ').shift().trim();
        }
        return product;
    }
    getProductColor() {
        let colorIndex = this.getWordsIndexes(this.globalDesc, '"color"');
        let color = this.globalDesc.substring(colorIndex[0], this.globalDesc.length);
        color = color.substring(0, color.search(','));
        color = color.split(':').pop().replaceAll('"', '').replaceAll('}', '').trim();
        return color;
    }
}
exports.Adidas = Adidas;
//# sourceMappingURL=index.js.map