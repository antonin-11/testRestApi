declare class Adidas {
    body: string;
    private globalDesc;
    brand: string;
    constructor(body: string);
    getWordsIndexes(str: any, word: any): number[];
    getSubString(): string;
    getProductPrice(): number;
    getProduct(): string;
    getProductType(): string;
    getProductColor(): string;
}
export { Adidas };
