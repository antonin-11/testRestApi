import { Injectable } from '@nestjs/common';

import shoeService from '../db/services/shoeService'

import { UrlDto } from '../dto/add.dto';

@Injectable()
export class DatabaseService {

    async adchecker(data: UrlDto): Promise<Boolean> {
        return await shoeService.getByUrl(data.url);
    }

}
