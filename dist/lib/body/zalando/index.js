"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zalando = void 0;
class Zalando {
    constructor(body) {
        this.body = body;
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
        let indexes = this.getWordsIndexes(this.body, '<title>');
        let endIndex = this.getWordsIndexes(this.body, '</title>');
        return this.body.substring(indexes[0] + 7, endIndex[0]);
    }
    getProductPrice() {
        let beginIndex = this.getWordsIndexes(this.body, 'pour');
        let endIndex = this.getWordsIndexes(this.body, '€');
        const price = this.body.substring(beginIndex[0] + 5, endIndex[0] - 6).replace(',', '.');
        return Number(price);
    }
    getProduct() {
        return this.globalDesc.split("-")[0].trim();
    }
    getProductType() {
        return this.globalDesc.split("-")[1].trim();
    }
    getProductColor() {
        return this.globalDesc.split("-")[2].trim().split('/')[0];
    }
}
exports.Zalando = Zalando;
//# sourceMappingURL=index.js.map