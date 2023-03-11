import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExtensionService } from '../services/extension.service';

import { ShoeDto } from '../dto/add.dto';
import { BodyDto } from '../dto/body.dto';

@Controller()
export class ExtensionController {
  constructor(private readonly extensionService: ExtensionService) {}

  @Get('products')
    getExtensionBody(): string {
      return this.extensionService.getExtensionBody();
    }

  @Post('addproducts')
    async AddShoe(@Body() Shoe: ShoeDto): Promise<boolean> {
      return this.extensionService.Addshoe(Shoe);
    }
  
  @Post('getproducts')
    async getShoe(@Body() data: BodyDto): Promise<object> {
      return this.extensionService.getShoes(data);
    }

}
