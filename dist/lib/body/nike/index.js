"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nike = void 0;
class Nike {
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
        let contextIndex = this.getWordsIndexes(this.body, '"@context"');
        this.globalDesc = this.body.substring(contextIndex.pop(), this.body.length);
        let endIndex = this.getWordsIndexes(this.globalDesc, '</script>');
        this.globalDesc = this.globalDesc.substring(0, endIndex[0]);
        return this.globalDesc;
    }
    getProductPrice() {
        let priceIndex = this.getWordsIndexes(this.globalDesc, 'rice"');
        let availableIndex = this.getWordsIndexes(this.globalDesc, '"availability"');
        let price = this.globalDesc.substring(priceIndex[0], availableIndex[0]);
        price = price.substring(price.search(' '), price.search(','));
        price = price.replaceAll('"', '');
        return Number(price);
    }
    getProduct() {
        let nameIndex = this.getWordsIndexes(this.globalDesc, '"name"');
        let imageIndex = this.getWordsIndexes(this.globalDesc, '"image"');
        let name = this.globalDesc.substring(nameIndex[0], imageIndex[0]);
        name = name.split(':').pop().replaceAll('"', '').split('pour').shift().trim();
        if (name.includes('Chaussure')) {
            name = name.split('Chaussure').pop().trim();
        }
        return name;
    }
    getProductType() {
        let nameIndex = this.getWordsIndexes(this.globalDesc, '"name"');
        let imageIndex = this.getWordsIndexes(this.globalDesc, '"image"');
        let name = this.globalDesc.substring(nameIndex[0], imageIndex[0]);
        name = name.split(':').pop().replaceAll('"', '').split('pour').shift().trim();
        if (name.includes('Chaussure')) {
            name = name.split(' ').shift().trim();
        }
        return name;
    }
    getProductColor() {
        let colorIndex = this.getWordsIndexes(this.globalDesc, '"color"');
        let color = this.globalDesc.substring(colorIndex[0] + 7, this.globalDesc.length);
        color = color.substring(0, color.search(',')).replace('}', '');
        color = color.split(':').pop().replaceAll('"', '').replace(',', '').trim();
        let tabColor = color.split('/')[0];
        return tabColor;
    }
}
exports.Nike = Nike;
//# sourceMappingURL=index.js.map