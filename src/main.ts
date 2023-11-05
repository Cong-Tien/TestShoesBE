import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(express.static('.'));
  const config = new DocumentBuilder().setTitle('Swagger').setVersion('1000').build();
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup("/api/v1/swagger",app,document)
  await app.listen(8080);
}
bootstrap();