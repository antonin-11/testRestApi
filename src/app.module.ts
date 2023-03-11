import { Module } from '@nestjs/common';

import { AppController } from './controllers/app.controller';
import { ExtensionController } from './controllers/extension.controller';
import { DatabaseController } from './controllers/database.controller';

import { AppService } from './services/app.service';
import { ExtensionService } from './services/extension.service';
import { DatabaseService } from './services/database.service';

@Module({
  imports: [],

  controllers: [
    AppController,
    ExtensionController,
    DatabaseController
  ],
  providers: [
    AppService,
    ExtensionService,
    DatabaseService
  ],

})
export class AppModule {}