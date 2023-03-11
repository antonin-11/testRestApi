declare class VintedSearch {
    url: string;
    catalog_ids: string;
    size_ids: string;
    brand_ids: string;
    color_ids: string;
    search_text: string;
    data: object;
    constructor(data: object);
    setCookies(): Promise<void>;
    getSearchVinted(): Promise<JSON>;
    setCatalog(catalog: number): void;
    setSize(sizes: number[]): void;
    setBrand(brands: string[]): void;
    setColor(colors: string[]): void;
    setSearch(search: string): void;
    getQuery(): void;
}
export default VintedSearch;
