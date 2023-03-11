import Shoe, { ShoeInput, ShoeOuput } from '../models/shoe';
declare class ShoeDal {
    static create(input: ShoeInput): Promise<ShoeOuput>;
    static update(id: number, input: Partial<ShoeInput>): Promise<ShoeInput>;
    static upsert(input: Partial<ShoeInput>): Promise<[Shoe, boolean]>;
    static getById(id: number): Promise<ShoeOuput>;
    static getByUrl(url: string): Promise<Boolean>;
    static deleteById(id: number): Promise<number>;
}
export default ShoeDal;
