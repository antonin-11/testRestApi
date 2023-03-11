import { NestFactory } from '@nestjs/core';
import 'dotenv/config';

import { AppModule } from './app.module';
import Database from './db/config';
import dbinit from './db/init';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

async function main() {
  const app = await NestFactory.create(AppModule);
  const port = 3001;

  // Initializes database
  // await dbinit();

  app.useGlobalPipes(new ValidationPipe({transform: true}));

  await app.listen(port);
}

main();
