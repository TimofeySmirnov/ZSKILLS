import { NestFactory } from '@nestjs/core';
import { CoreModule } from './core/core.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(CoreModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.enableCors({
    origin: 'http://localhost:3000'
  })

  await app.listen(4000);
}

bootstrap();
