import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MiddlewareInterceptor } from './common/interceptor/middleware.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('/api');
  app.useGlobalInterceptors(new MiddlewareInterceptor());
  await app.listen(4000);
}
bootstrap();
