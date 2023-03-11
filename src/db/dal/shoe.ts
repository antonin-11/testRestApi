import Shoe, { ShoeInput, ShoeOuput} from '../models/shoe'
import { DbError } from '../../error';

type ShoeResponse = Promise<ShoeInput | ShoeOuput>

class ShoeDal {
  static async create(input: ShoeInput): Promise<ShoeOuput> {
    return await Shoe.create(input);
  }

  static async update(id: number, input: Partial<ShoeInput>): Promise<ShoeInput> {
    const result = await Shoe.findByPk(id);

    if (result === null) {
      throw new DbError('Not found');
    }

    const shoe = result as Shoe;

    return await shoe.update(input);
  }

  static async upsert(input: Partial<ShoeInput>): Promise<[Shoe, boolean]> {
    return await Shoe.upsert(input);
  }

  static async getById(id: number): Promise<ShoeOuput> {
    const result = await Shoe.findByPk(id);

    if (result === null) {
      throw new DbError('Not found');
    }

    return result;
  }

  static async getByUrl(url: string): Promise<Boolean> {

    const result = await Shoe.findOne({
      where: {url}
    });

    if (result === null) {
      return false;
    }
    return true;
  }

  static async deleteById(id: number): Promise<number> {
    return await Shoe.destroy({
      where: {id}
    });
  }
}

export default ShoeDal;
