import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000,()=>{
    console.log(`server listening on 4000`);
  });
}
bootstrap(); 
