import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import * as morgan from 'morgan'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({ origin: process.env.FRONTEND_URL.split(',') })
  app.useGlobalPipes(new ValidationPipe({ transform: true }))
  app.use(morgan('dev'))
  await app.listen(process.env.PORT || 4242, '0.0.0.0')
}
bootstrap()
