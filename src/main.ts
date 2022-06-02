import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //configuração do Class-validator e class-transformer
  app.useGlobalPipes(new ValidationPipe());

  //configuração do swagger
  const config = new DocumentBuilder()
    .setTitle('Xbox Live')
    .setDescription('Aplicação para gestão da loja de jogos')
    .setVersion('1.0.0')
    .addTag('Status')
    .addTag('Game')
    .addTag('Gender')
    .addTag('User')
    .addTag('Favorite')
    .addTag('Auth')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  await app.listen(process.env.PORT || 3333);
}
bootstrap();
