import { BodyDto } from 'src/dto/body.dto';
import { ShoeDto } from '../dto/add.dto';
export declare class ExtensionService {
    getExtensionBody(): string;
    Addshoe(shoe: ShoeDto): Promise<boolean>;
    getShoes(body: BodyDto): Promise<object>;
}
