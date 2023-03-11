class Adidas {
    private globalDesc: string;
    public brand: string = 'adidas';

    constructor (public body: string) {
        this.globalDesc = this.getSubString();
    }

    getWordsIndexes(str, word): number[] {
        let indexes = [], i = -1
        while ((i = str.indexOf(word, i+1)) != -1){
            indexes.push(i)
        }
        return indexes
    }
    
    getSubString():string {
        let beginIndex = this.getWordsIndexes(this.body, ',"image"');
        this.globalDesc = this.body.substring(beginIndex.pop(), this.body.length);
        return this.globalDesc;
    }

    getProductPrice():number {
        let priceIndex = this.getWordsIndexes(this.globalDesc, '"price"');
        let price = this.globalDesc.substring(priceIndex[0], this.globalDesc.length);
        price = price.substring(0, price.search(','));
        price = price.split(':').pop().trim();
        return Number(price);
    }

    getProduct():string {
        let nameIndex = this.getWordsIndexes(this.globalDesc, '"name"');
        let name = this.globalDesc.substring(nameIndex[0], this.globalDesc.length);
        name = name.substring(0, name.search(','));
        name = name.split(':').pop().replaceAll('"', '').replaceAll('}', '').trim();
        if (name.includes('Chaussure')) {
            name = name.split('Chaussure').pop().trim();
        }
        return name;
    }

    getProductType():string {
        let productIndex = this.getWordsIndexes(this.globalDesc, '"name"');
        let product = this.globalDesc.substring(productIndex[0], this.globalDesc.length);
        product = product.substring(0, product.search(','));
        product = product.split(':').pop().replaceAll('"', '').replaceAll('}', '').trim();
        if (product.includes('Chaussure')) {
            product = product.split(' ').shift().trim();
        }
        return product;
    }
    
    getProductColor():string {
        let colorIndex = this.getWordsIndexes(this.globalDesc, '"color"');
        let color = this.globalDesc.substring(colorIndex[0], this.globalDesc.length);
        color = color.substring(0, color.search(','));
        color = color.split(':').pop().replaceAll('"', '').replaceAll('}', '').trim();
        return color;
    }
}

export { Adidas };
