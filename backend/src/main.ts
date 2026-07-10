import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Libera o frontend (Next.js) a consumir esta API.
  app.enableCors();

  // Porta 3333 para NÃO colidir com o Next.js (que roda na 3000).
  const port = process.env.PORT ?? 3333;
  await app.listen(port);

  console.log(`🚀 Backend NestJS rodando em http://localhost:${port}`);
}
bootstrap();
