declare class Nike {
    body: string;
    private globalDesc;
    constructor(body: string);
    getWordsIndexes(str: any, word: any): number[];
    getSubString(): string;
    getProductPrice(): number;
    getProduct(): string;
    getProductType(): string;
    getProductColor(): string;
}
export { Nike };
