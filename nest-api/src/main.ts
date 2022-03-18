import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
require('dotenv').config();

const log = new Logger('main');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOrigin = '*';

  app.enableCors({
    origin: corsOrigin,
    allowedHeaders:
      'Origin, X-Requested-With, Content-Type, Accept',
  });

  const config = new DocumentBuilder()
    .setTitle(process.env.SWAGGER_TITLE || 'title')
    .setDescription(process.env.SWAGGER_DESCRIPTION ||'description')
    .setVersion(process.env.SWAGGER_VERSION ||'1.0')
    .addTag(process.env.SWAGGER_TAG ||'tag')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);

  log.log(`Application is running on: ${await app.getUrl()}`);
  log.log(`Application swagger URL: ${await app.getUrl()}/api`);
}
bootstrap();
