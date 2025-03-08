import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatabaseExceptionFilter } from './common/DatabaseExceptionFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new DatabaseExceptionFilter());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
