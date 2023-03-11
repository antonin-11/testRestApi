import { Body, Controller, Get, Post } from '@nestjs/common';
import { DatabaseService } from '../services/database.service';
import { UrlDto } from '../dto/add.dto';

@Controller()
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

    @Post('adchecker')   
    adchecker(@Body() data: UrlDto): Promise<Boolean> {
        return this.databaseService.adchecker(data);
    }

}
