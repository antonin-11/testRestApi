import { DatabaseService } from '../services/database.service';
import { UrlDto } from '../dto/add.dto';
export declare class DatabaseController {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    adchecker(data: UrlDto): Promise<Boolean>;
}
