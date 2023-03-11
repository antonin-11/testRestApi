import ShoeDal from "../dal/shoe";
import Shoe, { ShoeInput, ShoeOuput,} from '../models/shoe'

class ShoeService {
  static async create(input: ShoeInput): Promise<ShoeOuput> {
    return ShoeDal.create(input);
  }

  static async update(id: number, input: Partial<ShoeInput>): Promise<ShoeInput> {
    return ShoeDal.update(id, input);
  }

  static async upsert(input: Partial<ShoeInput>): Promise<[Shoe, boolean]> {
    return ShoeDal.upsert(input);
  }

  static async getById(id: number): Promise<ShoeOuput> {
    return ShoeDal.getById(id);
  }

  static async getByUrl(url: string): Promise<Boolean> {
    return ShoeDal.getByUrl(url);
  }

  static async deleteById(id: number): Promise<number> {
    return ShoeDal.deleteById(id);
  }
}

export default ShoeService;
