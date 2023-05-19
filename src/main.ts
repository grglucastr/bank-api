import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT || 3333;

  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  app.enableCors();
  app.setGlobalPrefix('api/v1');

  await app.listen(port, async () =>
    console.log('Server started on', await app.getUrl()),
  );
}
bootstrap();
