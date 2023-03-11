import { ExtensionService } from '../services/extension.service';
import { ShoeDto } from '../dto/add.dto';
import { BodyDto } from '../dto/body.dto';
export declare class ExtensionController {
    private readonly extensionService;
    constructor(extensionService: ExtensionService);
    getExtensionBody(): string;
    AddShoe(Shoe: ShoeDto): Promise<boolean>;
    getShoe(data: BodyDto): Promise<object>;
}
