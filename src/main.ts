import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Solo deja la data del dto (que estoy esperando) no lanza error
      forbidNonWhitelisted: true, // lanza un badrequest 400 si envian propiedades no estan en model
    }),
  );
  await app.listen(3000);
}
bootstrap();
