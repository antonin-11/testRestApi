class Zalando {
    private globalDesc: string;

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
        let indexes = this.getWordsIndexes(this.body, '<title>');
        let endIndex = this.getWordsIndexes(this.body, '</title>');
        // let prices = [];
        // let regexp = new RegExp('[ :>]')
        
        
        // for (let i = 0; i < indexes.length; i++) {
        //     console.log(i)
        //     let a = indexes[i]
        //     for (; !regexp.test(this.body[a]); a--);
        //     if (this.body.substring(a++, indexes[i]) != ' ') {
        //         prices.push(this.body.substring(a, indexes[i]))
        //     }
        // }

        return this.body.substring(indexes[0] + 7, endIndex[0]);
    }

    getProductPrice():number {
        let beginIndex = this.getWordsIndexes(this.body, 'pour');
        let endIndex = this.getWordsIndexes(this.body, '€');

        const price = this.body.substring(beginIndex[0] + 5, endIndex[0] - 6).replace(',', '.');
        return Number(price);
    }

    getProduct():string {
        return this.globalDesc.split("-")[0].trim();
    }

    getProductType():string {
        return this.globalDesc.split("-")[1].trim();
    }
    
    getProductColor():string {
        return this.globalDesc.split("-")[2].trim().split('/')[0];
    }
}

export { Zalando };
